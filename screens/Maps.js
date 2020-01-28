import React from 'react';

import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {SearchBar} from 'react-native-elements'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import BottomNavigation from '../components/BottomNavigation';

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  logo: {
    height: 50
  },
  searchBarContainer: {
    top: -100
  },
  mapContainer: {
    flex: 6,
  },
  scrollView: {
    position: "absolute",
    bottom: 110,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

class MapsScreen extends React.Component {

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  _onPressMapButton = (index) => {
    this.props.navigation.navigate('LocationFullView', { current_marker: this.state.markers[index] });
  };

  _updateSearch = (search) => {
    this.setState({ search });
  };

    watchID: ?number = null;

    state = {
      // initialPosition: 'unknown',
      // lastPosition: 'unknown',
      search: '',
      markers: [{
        title: "Quick Trip #1",
        description: "Test description #1",
        coordinate: {
          latitude: 33.3776538,
          longitude: -112.0490218,
        },
        image: Images[0]
      },
      {
        title: "Quick Trip #2",
        description: "Test description #2",
        coordinate: {
          latitude: 33.4803774,
          longitude: -112.0328086,
        },
        image: Images[1]
      },
      {
        title: "Quick Trip #3",
        description: "Test description #3",
        coordinate: {
          latitude: 33.4796037,
          longitude: -112.1171363,
        },
        image: Images[2]
      }],
      region: {
        latitude: 33.4486,
        longitude: -112.077,
        latitudeDelta: 1,
        longitudeDelta: 0.0421
      }
    };

    componentWillMount() {
      this.index = 0;
      this.animation = new Animated.Value(0);
    }

    componentWillUnmount() {
      this.watchID != null && Geolocation.clearWatch(this.watchID);
    }

    componentDidMount() {
      Geolocation.getCurrentPosition(
        position => {
        // const initialPosition = JSON.stringify(position);
        // this.setState({initialPosition});

          // console.log("---CURRENT STATE BEFORE: ", this.state.region);

          //update state
          this.setState({ region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05
          } });

          //goto the location
          this.map.animateToRegion(this.state.region, 350);

          // console.log("---NEW COORDS: ", position);
          // console.log("---CURRENT STATE AFTER: ", this.state.region);

        },
        error => Alert.alert('Error', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
      this.watchID = Geolocation.watchPosition(position => {
        // const lastPosition = JSON.stringify(position);
        // this.setState({lastPosition});
      });

      // We should detect when scrolling has stopped then animate
      // We should just debounce the event listener here
      this.animation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (index >= this.state.markers.length) {
          index = this.state.markers.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }

        clearTimeout(this.regionTimeout);
        this.regionTimeout = setTimeout(() => {
          if (this.index !== index) {
            this.index = index;
            const { coordinate } = this.state.markers[index];
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
      });
    }

  render() {
    const { search } = this.state;

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.mapContainer}
          loadingEnabled={true}
          showsUserLocation={true}>

          {this.state.markers.map((marker, index) => {
            const scaleStyle = { transform: [{scale: interpolations[index].scale}] };
            const opacityStyle = { opacity: interpolations[index].opacity };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/poppit-logo.png')} resizeMode='contain' />
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder="Search for coupons near you..."
            onChangeText={this._updateSearch}
            value={search}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1}}
            placeholderTextColor='#g5g5g5' />
        </View>

        <BottomNavigation />

      </View>
    );
  }

/*
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
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View
              style={styles.card} key={index}>
              <TouchableHighlight onPress={() => this._onPressMapButton(index) } style={styles.cardImage}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
              </TouchableHighlight>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
*/
}

export default MapsScreen