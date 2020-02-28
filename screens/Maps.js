import React from 'react';

import {
  Alert,
  BackHandler,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Keyboard } from 'react-native'

import { Icon, SearchBar } from 'react-native-elements';

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import AsyncStorage from '@react-native-community/async-storage';

import MarkerWithView from '../components/MarkerWithView';
import LogoBanner from '../components/LogoBanner';
import BottomNavigation from '../components/BottomNavigation';
import { markers as FAKE_MARKERS } from '../components/FakeMarkers';
import {
  mapsStyleSheet as styles,
  searchResultsIconColor,
  searchResultsIconSize,
  carouselShownPosition
} from '../components/globalstyles';

const MARKER_SEEN = "seen";
const MARKER_SEEN_PREPEND = "marker@";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 20;
const SNAP_TO_CARD = CARD_WIDTH+20;

class MapsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restoringState: false,
      boundingBox: null,
      mapReady: true,
      showCarousel: false,
      selectedMarkerIndex: -1,
      // initialPosition: 'unknown',
      // lastPosition: 'unknown',
      searchInProgress: false,
      search: '',
      markers: [],
      region: {
        latitude: 33.4486,
        longitude: -112.077,
        latitudeDelta: 1,
        longitudeDelta: 0.0421
      }
    };

    this.animation = new Animated.Value(0);
    this.carouselShowHideAnimation = new Animated.ValueXY({ x: 0, y: height })
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  user_id = 123;

  watchID: ?number = null;

  _getBoundingBox = (region) => {
    // console.log("_getBoundingBox() :: REGION: ", region);
    let boundingBox = {
      westLng: region.longitude - region.longitudeDelta/2, // westLng - min lng
      southLat: region.latitude - region.latitudeDelta/2, // southLat - min lat
      eastLng: region.longitude + region.longitudeDelta/2, // eastLng - max lng
      northLat: region.latitude + region.latitudeDelta/2 // northLat - max lat
    }
    return boundingBox;
  }

  _isInBoundingBox(coordinate) {
    // console.log("_isInBoundingBox() :: this.state.boundingBox: ", this.state.boundingBox);
    if (coordinate.latitude > this.state.boundingBox.southLat && coordinate.latitude < this.state.boundingBox.northLat &&
        coordinate.longitude > this.state.boundingBox.westLng && coordinate.longitude < this.state.boundingBox.eastLng)
    {
      return true;
    }
    return false;
  }

  _onMapReady = () => {
    this.setState({ mapReady: true}, () => {
      this._updateSearch("");
    })
  }

  _onRegionChange = (r) => {
    let boundingBox = this._getBoundingBox(r);

    if(!this.state.restoringState) {
      this.setState({
          boundingBox: boundingBox,
          region: r
      }, () => {
        this._updateSearch("");
      });
    } else {
      //this change was fired as a result of restoring the state, so disable it
      this.setState({
        restoringState: false
      });
    }
  }

  _onPressMap = () => {
      this._deselectMarker();
      this._hideCarousel();
  };

  //if we haven't seen this marker, save it
  _seenMarker = (marker, cb) => {
    let computedMarkerHash = MARKER_SEEN_PREPEND + marker.hash;
    // console.log("_seenMarker() START : checking: " + computedMarkerHash);
    AsyncStorage.getItem(computedMarkerHash, (err, seenValue) => {
      marker.seen = false;

      // console.log("_seenMarker() START : "+ computedMarkerHash + " :: " + seenValue);
      if( seenValue == MARKER_SEEN ){
        marker.seen = true;
      }

      // console.log("_seenMarker() BEFORE CB() : ", marker);
      if(cb !== undefined) cb(marker);
    });
  };

  _onPressMarker = (event,index) => {
    //move the carousel to the current marker
    if(index > -1) {
      //try to get the x value based on the index
      let xValue = Math.floor( index * SNAP_TO_CARD );
      //WARNING: .getNode() might be deprecated later
      //However, according to the issue, FB doesn't care or won't fix this..
      //for now..so..go head and use it.
      //https://stackoverflow.com/questions/42051368/scrollto-is-undefined-on-animated-scrollview
      //https://github.com/facebook/react-native/issues/19235
      this.scrollView.getNode().scrollTo({x: xValue, y: 0, animated: false});
    }

    this._moveCarousel();

    let newRegion = {
      latitude: this.state.markers[index].coordinate.latitude,
      longitude: this.state.markers[index].coordinate.longitude,
      latitudeDelta: this.state.region.latitudeDelta,
      longitudeDelta: this.state.region.longitudeDelta
    };

    //set the current marker selected
    this.map.animateToRegion(newRegion,500);
    this.setState({
      selectedMarkerIndex: index,
      previousRegion: this.state.region,
      region: newRegion
    }, () => {
      // console.log("_onPressMarker() :: marker pressed: ", this.state.markers[index].hash);

      let thisMarker = this.state.markers[index];
      //if we've seen this marker, set it
      if(!thisMarker.seen) {
        let computedMarkerHash = MARKER_SEEN_PREPEND + thisMarker.hash;
        AsyncStorage.setItem(computedMarkerHash, MARKER_SEEN, (err) => {
          if(err) throw err;

          //we also need to update local copy of markers
          let clonedMarkers = JSON.parse(JSON.stringify(this.state.markers))

          clonedMarkers[index].seen = true;

          this.setState({ markers: clonedMarkers }, () => {
            this._showCarousel();
            // console.log("_onPressMarker() :: Marker set as seen: ", thisMarker.hash);
          });
        });
      } else {
        // console.log("_onPressMarker() :: Marker already seen: ", thisMarker.hash);
        this._showCarousel();
      }
    });
  };

  _deselectMarker = () => {
    if (this.state.selectedMarkerIndex > -1){
      //restore the previous state...
      this.setState({
        restoringState: true,
        boundingBox: this._getBoundingBox(this.state.previousRegion),
        selectedMarkerIndex: -1,
        previousRegion: {},
        region: this.state.previousRegion
      }, () =>{
        this.map.animateToRegion(this.state.region,500);
      });
    }
  };

  _renderMarkers = () => {
    // console.log("_renderMarkers() FIRED");

    if (this.state.markers.length > 0) {
      // console.log("_renderMarkers() rendering: " + this.state.markers.length + " markers");

      return ( this.state.markers.map( (marker, index) => {
        let markerStylesArr = [styles.marker];
        if(index === this.state.selectedMarkerIndex) {
          markerStylesArr.push(styles.selectedMarker);
        } else if(this.state.markers[index].seen === true) {
          markerStylesArr.push(styles.visitedMarker);
        } else {
          markerStylesArr.push(styles.regularMarker);
        }
        // console.log("_renderMarkers() :: This marker seen? ", this.state.markers[index].seen);
        return (
          <MapView.Marker key={index} coordinate={marker.coordinate}
            onPress={e => this._onPressMarker(e, index)}>
            <View style={styles.markerWrap}>
              <View style={markerStylesArr}>
                <Text style={[styles.white,styles.markerText]}>{marker.coupon.title.toUpperCase()}</Text>
              </View>
            </View>
          </MapView.Marker>
        );
          /*
          <MarkerWithView
            key={index}
            tracksViewChanges={false}
            coordinate={this.state.markers[index].coordinate}
            onPress={e => this._onPressMarker(e, index)}>
            <View style={styles.markerWrap}>
              <View style={markerStylesArr}>
                <Text style={[styles.white,styles.markerText]}>{marker.coupon.title.toUpperCase()}</Text>
              </View>
            </View>
          </MarkerWithView>
          */
      }));
    } else {
      //show "no results"
      return null;
    }
  };

  _onPressCarouselItem = (index) => {
    //could be a game, raffle or some other website

    //this will need to change to someting more generic wording..
    this.props.navigation.navigate('Game', {
      user_id: this.user_id,
      current_marker: this.state.markers[index]
    });
  };

  _handleBackCarousel = () => {
    this._deselectMarker();
    this._hideCarousel();
    return true;
  };

  _hideCarousel = () => {
    if(this.state.showCarousel === true){
      //unbind the hardware event listener since the carousel is not shown anymore
      BackHandler.removeEventListener("hardwareBackPress", this._handleBackCarousel),

      this.setState({
        showCarousel: false
      }, () => {
        this._moveCarousel();
      });
    }
  };

  _showCarousel = () => {
    if(this.state.showCarousel === false){
      this.setState({
        showCarousel: true
      }, () => {
        this._moveCarousel();
      });
    }
  };

  _moveCarousel = () => {
    //default to hide
    let yValue = height;
    if(this.state.showCarousel){
      yValue = carouselShownPosition;
    }

    Animated.spring(this.carouselShowHideAnimation, {
      bounciness: 0,
      toValue: {x: 0, y: yValue },
    }).start((e) => {
      if(e.finished === true && this.state.showCarousel == true) {
        //if we completed showing the carousel, register the backbutton
        BackHandler.addEventListener("hardwareBackPress", this._handleBackCarousel);
      }
    });
  }

  _renderCarousel = () => {
      return (
        <Animated.View style={[styles.scrollView,this.carouselShowHideAnimation.getLayout()]}>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={SNAP_TO_CARD}
          ref={scrollView => this.scrollView = scrollView}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          contentContainerStyle={styles.endPadding}>

          {this.state.markers.map((marker, index) => (
            <View
              style={styles.card} key={index}>
              <TouchableOpacity onPress={() => this._onPressCarouselItem(index) } style={styles.cardImage}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={[styles.grey,styles.cardtitle]}>{marker.title}</Text>
                <Text numberOfLines={1} style={[styles.grey,styles.cardDescription]}>{marker.description}{" => state: "}{marker.state}</Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        </Animated.View>
      );
  };

  _updateSearch = (search) => {
    if(!this.state.showCarousel && this.state.mapReady){
      // console.log("_updateSearch() FIRED");

      this.setState({
        lastSearch: this.state.search,
        search: search
      }, () =>{
        this._search();
      });
    } else {
      // console.log("_updateSearch() :: not allowed");
    }
  };

  _clearSearch = () => {
    Keyboard.dismiss();
    this._hideCarousel();

    this.setState({
        markers: [],
        selectedMarkerIndex: -1,
        searchInProgress: false
      }, () => {
        //render AFTER setting state
        this._renderMarkers();
      });
  };

  _search = () => {
    // console.log("_search() FIRED");

    //don't allow others to run if a search is already in progress...?
      //this might lock out the real search someone wants to perform...
      //or launch a miniature screen to just get a user's search
    if(!this.state.searchInProgress){
      // console.log("_search() ALLOWED");
      this.setState({
        searchInProgress: true
      }, () => {

        //simulate a search
        setTimeout(() => {
          //loop through results and check if they've been seen
          let results = [];
          // let randomCoordsArr = [];

          // //generate fake marker coordinates based on current region
          // for(let i=0; i < 10000;i++) {
          //   let randomCoords = {
          //     //latitude from (32 -> 34)
          //     latitude:  parseFloat(((Math.random() * 4) + this.state.region.latitude).toFixed(3)),

          //     //lognitude from (-111 -> -113)
          //     longitude: parseFloat((-(Math.random() * 3) + this.state.region.longitude).toFixed(3))
          //   };

          //   if( this._isInBoundingBox(randomCoords) ) {
          //     randomCoordsArr.push(randomCoords);

          //     SEARCH_MARKERS[randomCoordsArr.length-1].coordinate = randomCoords;
          //     if( randomCoordsArr.length == SEARCH_MARKERS.length ){
          //       console.log("Found random coords: ", randomCoords);
          //       break;
          //     }
          //   }
          // }

          //copy to an object that is mutable
          let SEARCH_MARKERS = JSON.parse(JSON.stringify(FAKE_MARKERS));
          let numResults = SEARCH_MARKERS.length;

          SEARCH_MARKERS.map((marker, index) => {
            // console.log("BEFORE _seenMarker() :: marker ", marker.coordinate);
            this._seenMarker(marker, (newMarker) =>{
              if( this._isInBoundingBox(newMarker.coordinate) ){
                results.push(newMarker);
              }
              if(index == numResults-1){
                // console.log("_search() :: SEARCH COMPLETE: ", results);

                this.setState({
                  searchInProgress: false,
                  markers: results
                }, () => {
                  //render AFTER setting state
                  this._renderMarkers();
                  Keyboard.dismiss();
                });
              }
            });
          });
        }, 1000);
      });
    }
  };

  _renderSearchResultsIndicator = () => {

    if(this.state.searchInProgress) {
      return (
        <View style={styles.searchResultsIndicatorContainer}>
          <View style={styles.searchResultsIndicatorView}>
            <View style={styles.searchResultsIndicator}>
              <Text style={[styles.white, styles.searchResultsIndicatorText, styles.marginLeft10]}>Loading...</Text>
            </View>
          </View>
        </View>
      );
    } else if (!this.state.searchInProgress && this.state.markers.length > 0) {
      return (
        <View style={styles.searchResultsIndicatorContainer}>
          <View style={styles.searchResultsIndicatorView}>
            <View style={styles.searchResultsIndicator}>
              <Icon name='circle-slice-8' type='material-community' color={searchResultsIconColor} size={searchResultsIconSize} />
              <Text style={[styles.white, styles.searchResultsIndicatorText, styles.marginLeft10]}>{this.state.markers.length} Results</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.searchResultsIndicatorContainer}>
          <View style={styles.searchResultsIndicatorView}>
            <View style={styles.searchResultsIndicator}>
              <Text style={[styles.white, styles.searchResultsIndicatorText, styles.marginLeft10]}>No Results</Text>
              <Icon name='circle-small' type='material-community' color="#fff" />
              <Text style={[styles.white, styles.searchResultsIndicatorText]}>please zoom out or update filters</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  _getCachedItem = async (key) => {
    let item = await AsyncStorage.getItem(key);
    return item;
  };

  _setCachedItem = async (key, val) => {
    await AsyncStorage.setItem(key, val);
    return;
  };

  _completeCampaign = (activity_data, cb) => {
    console.log("_completeCampaign() :: mark campaign_id COMPLETE:"+activity_data.campaign_id);

    //loop through and find the marker that should be updated...
    let markersCopy = JSON.parse(JSON.stringify(this.state.markers));
    let numMarkers = this.state.markers.length;

    this.state.markers.map((marker, index) => {
      if( marker.campaign_id == activity_data.campaign_id ){

        //replace the old item
        markersCopy[index] = marker;

        marker.state = activity_data.state;

        if(index == numMarkers-1){
          this.setState({
            markers: markersCopy
          }, () => {
            this._renderMarkers();
            cb();
          });
        }
      } else {
        console.log("_completeCampaign() :: No matching campaign_id found: " +  activity_data.campaign_id);
        cb();
      } //end if campaign activity found
    });
  }

  componentWillUnmount() {
    this.focusSubscription.remove();

    this.watchID != null && Geolocation.clearWatch(this.watchID);
    this._setCachedItem('lastRegion', JSON.stringify(this.state.region));
  }

  componentDidMount() {
    this.focusSubscription = this.props.navigation.addListener('willFocus', () => {
      console.log("MAPS :: componentDidMount() :: willFocus FIRED");

      let activity_data = this.props.navigation.getParam("activity_data");
      console.log("MAPS :: componentDidMount() :: willFocus :: activity_data? : ", activity_data);
      if( activity_data && activity_data.campaign_id && activity_data.campaign_id > 0){
        //mark campaign as complete
        this._completeCampaign(activity_data, () => {
          //unset route params so this doesn't get fired again by mistake
          this.props.navigation.setParams({ activity_data: {}});
        });
      }

    });

    //restore the last region, if one..
    //what if the region was null, default region to user's location
    this._getCachedItem('lastRegion').then(data => {
      if(data !== null){
        let region = JSON.parse(data);
        this.setState({
          boundingBox: this._getBoundingBox(region),
          region: region
        });

        //goto the location
        this.map.animateToRegion( region , 350);
      } else {
        Geolocation.getCurrentPosition(
          position => {

            let region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05
            };

            //update state
            this.setState({ region: region });

            //goto the location
            this.map.animateToRegion(region, 350);
          },
          error => Alert.alert('Error', JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
      }
    });


    this.watchID = Geolocation.watchPosition(position => {
      // const lastPosition = JSON.stringify(position);
      // this.setState({lastPosition});
    });

    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    // this.animation.addListener(this._animateCarouselToMarker);
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.55); // animate 55% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);

      if (this.state.markers.length > 0) {
        this.regionTimeout = setTimeout(() => {
          if (this.state.selectedMarkerIndex !== index) {
            const { coordinate } = this.state.markers[index];
            //also highlight the current selected marker
            this.setState({ selectedMarkerIndex: index });

            this.map.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: this.state.region.latitudeDelta,
                longitudeDelta: this.state.region.longitudeDelta,
              },
              350
            );
          }
        }, 10);
      }
    });
  }

  render() {
    const { search } = this.state;
    /*
    For when I need to draw a polygon..
            <Polygon
              coordinates={[
                {  latitude: 33.8857, longitude: -111.7175 },
                {  latitude: 33.8857, longitude: -112.3851 },
                {  latitude: 33.0710, longitude: -112.3851 },
                {  latitude: 33.0710, longitude: -111.7175 }
              ]}
              strokeWidth={1}
              fillColor={"rgba(220,0,0,0.3)"}
              strokeColor={"rgba(220,0,0,1)"}
            />
    */
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.mapContainer}
          onPress={this._onPressMap}
          onRegionChangeComplete={ r => {this._onRegionChange(r)}}
          loadingEnabled={true}
          moveOnMarkerPress={false}
          showsUserLocation={true}>

          {this._renderMarkers()}

        </MapView>

        {this._renderCarousel()}

        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarInnerContainer}>
            <Image
              style={styles.smallSquareLogo}
              source={{uri: "poppit_logo_square"}}
              resizeMode="contain" />

            <SearchBar
              showLoading={this.state.searchInProgress}
              placeholder="Search for coupons near you..."
              onChangeText={this._updateSearch}
              onClear={this._clearSearch}
              value={search}
              inputStyle={{backgroundColor: 'white'}}
              inputContainerStyle={{backgroundColor: 'white'}}
              containerStyle={styles.searchBar} />
          </View>
          {this._renderSearchResultsIndicator()}
        </View>

        <BottomNavigation />

      </View>
    );
  }
}

export default MapsScreen