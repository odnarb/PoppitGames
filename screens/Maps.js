import React from 'react';

import {
  StyleSheet
} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const customMapStyles = StyleSheet.create([
  {
    "stylers": [
      {
        "color": "#ea9800"
      }
    ]
  },
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e4c405"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]);


class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'Maps Screen'
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        title: "Quick Trip #1",
        description: "Test description #1",
        latlng: {
          latitude: 33.3776538,
          longitude: -112.0490218,
        }
      },
      {
        title: "Quick Trip #2",
        description: "Test description #2",
        latlng: {
          latitude: 33.4803774,
          longitude: -112.0328086,
        }
      },
      {
        title: "Quick Trip #3",
        description: "Test description #3",
        latlng: {
          latitude: 33.4796037,
          longitude: -112.1171363,
        }
      }]
    };
  };

  render() {
    return (
      <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
          initialRegion={{
            latitude: 33.4486,
            longitude: -112.077,
            latitudeDelta: 1,
            longitudeDelta: 0.0421,
      }}
      loadingEnabled={true}
      showsUserLocation={true}
      >
        {this.state.markers.map((marker, i) => (
          <Marker
            key={i}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description} />
        ))}
      </MapView>
    );
  }
}

export default MapsScreen