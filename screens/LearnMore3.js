import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LearnMoreNav from '../components/LearnMoreNav';

import { learnMoreStyleSheet as styles } from '../components/globalstyles';

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
          <Text style={styles.tutoralHeader}>Poppit Tutorial Slide 3</Text>
          <Text style={styles.tutorialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.tutorialImage}
              source={require('../assets/images/stock-photos/photo-game-3.jpg')}
              resizeMode='contain' />
          </View>
        </View>

        <LearnMoreNav slideNum={3} nextNavText="Finish" navToFn={() => this._navTo('Home')} />
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default LearnMoreScreen