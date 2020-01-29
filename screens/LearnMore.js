import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LearnMoreNav from '../components/LearnMoreNav';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6,
    paddingBottom: 10
  },

  tutoralHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },

  tutorialText: {
    marginTop: 10,
    fontSize: 17,
    color: '#555'
  },

  imageContainer: {
    flex: 6,
    marginTop: 20
  },

  tutorialImage: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  }
});

class LearnMoreScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain" />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.tutoralHeader}>Poppit Tutorial Slide 1</Text>
          <Text style={styles.tutorialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.tutorialImage}
              source={require('../assets/images/stock-photos/photo-game-1.jpg')}
              resizeMode='contain' />
          </View>
        </View>

        <LearnMoreNav slideNum={1} nextNavText="Next" navToFn={() => this._navTo('LearnMore2')} />
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default LearnMoreScreen