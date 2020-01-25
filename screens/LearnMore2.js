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
    backgroundColor: '#fff',
    paddingRight: 20,
    paddingLeft: 20
  },
  logoContainer: {
    paddingTop: 10
  },
  logo: {
    alignItems: "center",
    height: 50
  },
  tutoralHeader: {
    marginTop: 22,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },
  tutorialContentContainer: {
    flex: 1,
    marginLeft: 15,
    paddingRight: 15
  },
  tutorialText: {
    marginTop: 22,
    fontSize: 17,
    color: '#555'
  },
  tutorialImageContainer: {
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
              style={styles.logo}
              source={require('../assets/images/poppit-logo.png')}
              resizeMode='contain' />
          </View>

        <View style={styles.tutorialImageContainer}>
          <Image
            style={styles.tutorialImage}
            source={require('../assets/images/stock-photos/photo-game-2.jpg')}
            resizeMode='contain' />
        </View>

        <View style={styles.tutorialContentContainer}>
          <Text style={styles.tutoralHeader}>Poppit Tutorial Slide 2</Text>
          <Text style={styles.tutorialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>

        <LearnMoreNav nextNavText="Next" navTo="LearnMore3" navToFn={() => this._navTo('LearnMore3')} />

      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default LearnMoreScreen