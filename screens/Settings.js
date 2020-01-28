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
    flex: 7
  },

  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 20
  },

  optionBtn: {
//      flex: 1,
    // flexDirection: 'row',
  },

  optionBtnView: {
    flexDirection: 'row'
  },

  optionView: {
    flexDirection: 'row'
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
  settingsRow: {
      // flexDirection: 'row',
    paddingLeft: 12,
    marginTop: 20,
  },
  picker: {
    color:"#111",
    marginLeft: 20,
    height: 40,
    width: "80%"
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
        </View>

          <View style={styles.contentContainer}>

            <Text style={styles.headerText}>Settings</Text>

            <View style={styles.settingsRow}>

              <TouchableHighlight onPress={() => this._navTo('Profile')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                    <Icon
                      name='account'
                      type='material-community'
                      size={28}
                      color='#fff' />
                    <Text style={styles.settingsText}>My Account</Text>
                </View>
              </TouchableHighlight>

            </View>

            <View style={styles.settingsRow}>
              <TouchableHighlight onPress={() => this._navTo('Notifications')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='bell'
                    type='material-community'
                    size={28}
                    color='#fff' />
                  <Text style={styles.settingsText}>Notifications</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.settingsRow}>
                <View style={styles.optionView}>
                  <Icon
                    name='earth'
                    type='material-community'
                    size={28}
                    color='#fff' />
                  <Text style={styles.settingsText}>Language:</Text>

                  <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})
                    }>
                    <Picker.Item label="English" value="english" />
                    <Picker.Item label="Spanish" value="spanish" />
                    <Picker.Item label="French" value="french" />
                    <Picker.Item label="Dutch" value="dutch" />
                  </Picker>
                </View>
            </View>

            <View style={styles.settingsRow}>
              <TouchableHighlight onPress={() => this._navTo('About')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='information'
                    type='material-community'
                    size={28}
                    color='#fff' />

                  <Text style={styles.settingsText}>About</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.settingsRow}>
              <TouchableHighlight onPress={this._signOutAsync} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='logout'
                    type='material-community'
                    size={28}
                    color='#fff' />

                  <Text style={styles.settingsText}>Logout</Text>
                </View>
              </TouchableHighlight>
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