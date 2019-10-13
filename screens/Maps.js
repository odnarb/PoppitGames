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