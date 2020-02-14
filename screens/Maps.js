import React from 'react';

import {
  Alert,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Keyboard } from 'react-native'

import { Icon } from 'react-native-elements';

import {SearchBar} from 'react-native-elements'

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import AsyncStorage from '@react-native-community/async-storage';

import LogoBanner from '../components/LogoBanner';
import BottomNavigation from '../components/BottomNavigation';

import {
  mapsStyleSheet as styles,
  searchResultsIconColor,
  searchResultsIconSize,
  carouselShownPosition
} from '../components/globalstyles';

//an example of using external/remote assets
// const Images = [
//   { uri: "https://i.imgur.com/sNam9iJ.jpg" },
//   { uri: "https://i.imgur.com/N7rlQYt.jpg" },
//   { uri: "https://i.imgur.com/UDrH0wm.jpg" },
//   { uri: "https://i.imgur.com/Ka8kNST.jpg" }
// ];

const FAKE_MARKERS = [{
    seen: false,
    hash: "111111111-12345-11111111111111",
    title: "Quick Trip #1",
    description: "Test description #1",
    coupon: {
      title: "$.50 OFF",
      description: ""
    },
    coordinate: {
      latitude: 33.3776538,
      longitude: -112.0490218,
    },
    image: require("../assets/images/brands/quicktrip-logo-small.png")
  },
  {
    seen: false,
    hash: "222222222-12345-22222222222222",
    title: "Quick Trip #2",
    description: "Test description #2",
    coupon: {
      title: "-50% OFF",
      description: ""
    },
    coordinate: {
      latitude: 33.4803774,
      longitude: -112.0328086,
    },
    image: require("../assets/images/brands/quicktrip-logo-small.png")
  },
  {
    seen: false,
    hash: "333333333-12345-33333333333333",
    title: "Quick Trip #3",
    description: "Test description #3",
    coupon: {
      title: "FREE COFFEE",
      description: ""
    },
    coordinate: {
      latitude: 33.4796037,
      longitude: -112.1171363,
    },
    image: require("../assets/images/brands/quicktrip-logo-small.png")
}];

const MARKER_SEEN = "seen";
const MARKER_SEEN_PREPEND = "marker@";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class MapsScreen extends React.Component {

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  // _getBoundingBox = (region) => {
  //   let boundingBox = {
  //     westLng: region.longitude - region.longitudeDelta/2, // westLng - min lng
  //     southLat: region.latitude - region.latitudeDelta/2, // southLat - min lat
  //     eastLng: region.longitude + region.longitudeDelta/2, // eastLng - max lng
  //     northLat: region.latitude + region.latitudeDelta/2 // northLat - max lat
  //   }
  //   return boundingBox;
  // }

  // _isInBoudingBox(coordinate) {
  //   if (coordinate.latitude > this.state.boundingBox.southLat && coordinate.latitude < this.state.boundingBox.northLat &&
  //       coordinate.longitude > this.state.boundingBox.westLng && coordinate.longitude < this.state.boundingBox.eastLng)
  //   {
  //     return true;
  //   }
  //   return false;
  // }

  //if we haven't seen this marker, save it
  _seenMarker = (marker, cb) => {
    let computedMarkerHash = MARKER_SEEN_PREPEND + marker.hash;
    console.log("_seenMarker() START : checking: " + computedMarkerHash);
    AsyncStorage.getItem(computedMarkerHash, (err, seenValue) => {
      marker.seen = false;

      console.log("_seenMarker() START : "+ computedMarkerHash + " :: " + seenValue);
      if( seenValue == MARKER_SEEN ){
        marker.seen = true;
      }

      console.log("_seenMarker() BEFORE CB() : ", marker);
      if(cb !== undefined) cb(marker);
    });
  };

  _onPressMarker = (event,index) => {
    this._moveCarousel();

    //set the current marker selected
    this.setState({ selectedMarkerIndex: index }, () => {
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
            console.log("_onPressMarker() :: Marker set as seen: ", thisMarker.hash);
          });
        });
      } else {
        console.log("_onPressMarker() :: Marker already seen: ", thisMarker.hash);
        this._showCarousel();
      }
      // this._animateCarouselToMarker({}, this.state.selectedMarkerIndex);
    });
  };

  _onMapReady = () => {
    this.setState({ mapReady: true}, () => {
      this._updateSearch("");
    })
  }

  _onRegionChange = (r) => {
    // console.log("_onRegionChange() FIRED");

    this.setState({ region: r }, () => {
      // console.log("_onRegionChange() :: TODO :: search this area...");
    });
  }

  _onPressMap = () => {
      // console.log("_onPressMap() FIRED");

      this.setState({ selectedMarkerIndex: -1 });
      this._hideCarousel();
  };

  _onPressCarouselItem = (index) => {
    this.props.navigation.navigate('Game', { current_marker: this.state.markers[index] });
  };

  _updateSearch = (search) => {
    // console.log("_updateSearch() FIRED");
    if(this.state.mapReady){
      // console.log("_updateSearch() :: updating search");

      this.setState({
        lastSearch: this.state.search,
        search: search
      }, () =>{
        this._search();
      });
    } else {
      // console.log("_updateSearch() :: map not ready");
    }
  };

  _clearSearch = () => {
    this._updateSearch("");
    this.setState({ selectedMarkerIndex: -1 });
    this._hideCarousel();
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

  _hideCarousel = () => {
    if(this.state.showCarousel === true){
      this.setState({
        showCarousel: false
      }, () => {
        this._moveCarousel();
      });
    }
  };

  _search = () => {
    // console.log("_search() FIRED");

    //don't allow others to run if a search is already in progress...?
      //this might lock out the real search someone wants to perform...
      //or launch a miniature screen to just get a user's search
    if(!this.state.searchInProgress && this.state.search != this.state.lastSearch){
      // console.log("_search() ALLOWED");
      this.setState({
        searchInProgress: true
      }, () => {

        //render nothing if we've cleared the search
        if(this.state.search === "" ){
          this.setState({
            markers: [],
            searchInProgress: false
          }, () => {
            //render AFTER setting state
            this._renderMarkers();
            Keyboard.dismiss();
          });
        } else {
          //simulate a search
          setTimeout(() => {
            //loop through results and check if they've been seen
            let results = [];
            FAKE_MARKERS.map((marker, index) => {
              // console.log("BEFORE _seenMarker() :: marker ", marker);
              this._seenMarker(marker, (newMarker) =>{
                // console.log("AFTER _seenMarker() :: newMarker ", newMarker);
                results.push(newMarker);

                if(index == FAKE_MARKERS.length-1){
                  console.log("_search() :: SEARCH COMPLETE: ", results);

                  this.setState({
                    searchInProgress: false,
                    markers: results
                  }, () => {
                    //render AFTER setting state
                    this._renderMarkers();
                    Keyboard.dismiss();
                  });
                }
              })
            });
          }, 2000);
        } //endif
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

  _renderMarkers = () => {
    console.log("_renderMarkers() FIRED");

    if (this.state.markers.length > 0) {
      // const interpolations = this.state.markers.map((marker, index) => {
      //   const inputRange = [
      //     (index - 1) * CARD_WIDTH,
      //     index * CARD_WIDTH,
      //     ((index + 1) * CARD_WIDTH),
      //   ];

      //   const scale = this.animation.interpolate({
      //     inputRange,
      //     outputRange: [1, 2.5, 1],
      //     extrapolate: "clamp",
      //   });
      //   const opacity = this.animation.interpolate({
      //     inputRange,
      //     outputRange: [0.35, 1, 0.35],
      //     extrapolate: "clamp",
      //   });
      //   return { scale, opacity };
      // });

      //const scaleStyle = { transform: [{scale: interpolations[index].scale}] };
      //const opacityStyle = { opacity: interpolations[index].opacity };

      return ( this.state.markers.map( (marker, index) => {
        let markerStylesArr = [styles.marker];
        if(index === this.state.selectedMarkerIndex) {
          markerStylesArr.push(styles.selectedMarker);
        } else if(this.state.markers[index].seen === true) {
          markerStylesArr.push(styles.visitedMarker);
        } else {
          markerStylesArr.push(styles.regularMarker);
        }
        console.log("_renderMarkers() :: This marker seen? ", this.state.markers[index].seen);
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
      }));
    } else {

      //show "no results"
      return null;
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

  _moveCarousel = () => {
    //default to hide
    let yValue = height;
    if(this.state.showCarousel){
      yValue = carouselShownPosition;
    }

    Animated.spring(this.carouselShowHideAnimation, {
      bounciness: 0,
      toValue: {x: 0, y: yValue },
    }).start()
  }

  _renderCarousel = () => {
      return (
        <Animated.View style={[styles.scrollView,this.carouselShowHideAnimation.getLayout()]}>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
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
                  resizeMode="cover" />
              </TouchableOpacity>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={[styles.grey,styles.cardtitle]}>{marker.title}</Text>
                <Text numberOfLines={1} style={[styles.grey,styles.cardDescription]}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        </Animated.View>
      );
  };

  _animateCarouselToMarker = ({ value }, indexOverride) => {
    console.log("_animateToMarker() value: ", value);

    let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item

    //allow an override if we're trying to force an animation, like when a user selects a marker
    if(indexOverride > -1){
      index = indexOverride;
    }

    if (index >= this.state.markers.length) {
      index = this.state.markers.length - 1;
    }
    if (index <= 0) {
      index = 0;
    }

    clearTimeout(this.regionTimeout);

    if (this.state.markers.length > 0) {
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
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
  };

  watchID: ?number = null;

  state = {
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

  UNSAFE_componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
    this.carouselShowHideAnimation = new Animated.ValueXY({ x: 0, y: height })
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
    this._setCachedItem('lastRegion', JSON.stringify(this.state.region));
  }

  componentDidMount() {

    //restore the last region, if one..
    //what if the region was null, default region to user's location
    this._getCachedItem('lastRegion').then(data => {
      if(data !== null){
        let region = JSON.parse(data);
        this.setState({ region: region });

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
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);

      if (this.state.markers.length > 0) {
        this.regionTimeout = setTimeout(() => {
          if (this.index !== index) {
            this.index = index;
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

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.mapContainer}
          onPress={this._onPressMap}
          onRegionChangeComplete={ r => {this._onRegionChange(r)}}
          loadingEnabled={true}
          showsUserLocation={true}>

          {this._renderMarkers()}
        </MapView>

        <LogoBanner container="absolute" size="small" />

        {this._renderCarousel()}

        <View style={styles.searchBarContainer}>
          <SearchBar
            showLoading={this.state.searchInProgress}
            placeholder="Search for coupons near you..."
            onChangeText={this._updateSearch}
            onClear={this._clearSearch}
            value={search}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1}} />
        </View>

        {this._renderSearchResultsIndicator()}

        <BottomNavigation />

      </View>
    );
  }
}

export default MapsScreen