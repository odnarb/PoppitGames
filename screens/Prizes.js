import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BottomNavigation from '../components/BottomNavigation';

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },
  logoContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center'
  },
  logo: {
    height: 50
  },
  contentContainer: {
    flex: 5,
    marginTop: 10,
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 20
  },
  claimedPrizeContainer: {
    flex: 0.3,
    backgroundColor: "#666",
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  prizeContainer: {
    flex: 0.3,
    backgroundColor: "#fff",
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  prizeCell: {
    flex: 1,
    // flexDirection: 'column',
    borderColor: "#000",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  prizeText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center"
  }
});

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