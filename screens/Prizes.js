import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import LogoBanner from '../components/LogoBanner';

import BottomNavigation from '../components/BottomNavigation';

import { prizesStyleSheet as styles } from '../components/globalstyles';

class PrizesScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (

      <View style={styles.baseContainer}>
          <LogoBanner container="flex1" size="small" />

          <View style={styles.contentContainer}>

            <Text style={[styles.grey,styles.padLeft20,styles.textHeader]}>My Prizes</Text>

            <View style={[styles.greenBG,styles.prizeContainer]}>
              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>-25% OFF{'\n'}2 Liter Pepsi</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>Hooters{'\n'}Scottsdale</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>CLAIM</Text>
              </View>
            </View>


            <View style={[styles.lightGreyBG,styles.prizeContainer]}>
              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>FREE{'\n'}2 Liter Pepsi</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>Hooters{'\n'}Scottsdale</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={[styles.grey,styles.prizeText]}>CLAIMED</Text>
              </View>
            </View>

          </View>

          <BottomNavigation />
      </View>
    );

  }
}

export default PrizesScreen