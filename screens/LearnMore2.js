import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LearnMoreNav from '../components/LearnMoreNav';

import LogoBanner from '../components/LogoBanner';

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
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <Text style={[styles.grey,styles.tutoralHeader]}>Tutorial Slide 2</Text>
          <Text style={[styles.grey,styles.tutorialText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.tutorialImage}
              source={{uri:"photo_game_2"}}
              resizeMode='contain' />
          </View>
        </View>

        <LearnMoreNav slideNum={2} nextNavText="Next" navToFn={() => this._navTo('LearnMore3')} />
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default LearnMoreScreen