import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements';
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
    flex: 6,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },

  settingRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  settingLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },

  settingValue: {
    fontSize: 20,
    color: '#fff',
    marginLeft: "auto"
  },

  btnContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
});

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'My Account',
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

            <Text style={styles.headerText}>My Account</Text>

            <View style={{
              marginLeft: 20,
             }}>

              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Full Name: </Text>
                <Text style={styles.settingValue}>Jimmy Dean</Text>
              </View>

              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Email Address: </Text>
                <Text style={styles.settingValue}>john.smith@gmail.com</Text>
              </View>

              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Birthdate: </Text>
                <Text style={styles.settingValue}>3/7/1980</Text>
              </View>

              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Location: </Text>
                <Text style={styles.settingValue}>Tucson, AZ</Text>
              </View>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('ProfileEdit')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.btnDark}>{'Edit Account'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>

         <BottomNavigation />
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default ProfileScreen