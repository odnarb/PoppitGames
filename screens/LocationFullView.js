import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height/2;
const CARD_WIDTH = CARD_HEIGHT - 50;


const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  }
});

class LocationFullViewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.marker = this.props.navigation.getParam('current_marker');
    // console.log("LocationFullViewScreen :: getParam(): ", this.marker );
  }

  static navigationOptions = ({ navigation }) => {
    const {nav} = navigation;

    return {
      title: `${nav.params.current_marker.title}`
    };
  };

  render() {
    return (
      <View>
        <Text>Location full view screen..</Text>
        <Text>{JSON.stringify(this.marker)}</Text>
         <View style={styles.card}>
          <Image
          source={this.marker.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
        </View>
      </View>
    );
  }
}

export default LocationFullViewScreen