import React from 'react';

import {
  Image,
  Picker,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    backgroundColor: "#666"
  },

  logoContainer: {
    flex:2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 5,
    backgroundColor: "#888"
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  versionText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: "bold"
  },

  settingsText: {
    marginTop: 5,
    paddingLeft: 15,
    fontSize: 17,
    color: '#fff'
  },
  copyrightText :{
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 14,
    color: '#ccc'
  },

  versionRow: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },

  settingsRow: {
    paddingLeft: 12,
    marginTop: 20
  },
  hr: {
    marginTop: 20,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
  }
});

class SettingsScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };
  }

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
          <View style={styles.versionRow}>
            <Text style={styles.versionText}>version 1.3.2 (0bdd85b1)</Text>
          </View>
        </View>

          <View style={{
            flex: 6
          }}>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsText}>Terms of Use</Text>
            </View>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsText}>Privacy Policy</Text>
            </View>

            <View style={styles.hr}>
              <Text style={styles.copyrightText}>© Copyright Poppit Games LLC</Text>
            </View>
          </View>

          <BottomNavigation />
      </View>
    );
  }
    _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default SettingsScreen