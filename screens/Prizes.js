import React from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';

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
          <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source={require('../assets/images/poppit-logo.png')}
              resizeMode='contain' />
          </View>

          <View style={styles.contentContainer}>

            <Text style={styles.headerText}>My Prizes</Text>

            <View style={styles.prizeContainer}>
              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>-25% OFF{'\n'}2 Liter Pepsi</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>Hooters{'\n'}Scottsdale</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>CLAIM</Text>
              </View>
            </View>


            <View style={styles.claimedPrizeContainer}>
              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>FREE{'\n'}2 Liter Pepsi</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>Hooters{'\n'}Scottsdale</Text>
              </View>

              <View style={styles.prizeCell}>
                <Text style={styles.prizeText}>CLAIMED</Text>
              </View>
            </View>

          </View>

          <BottomNavigation />
      </View>
    );

  }
}

export default PrizesScreen