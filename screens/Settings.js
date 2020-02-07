import React from 'react';

import {
  Image,
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

import { settingsStyleSheet  as styles, settingsIconSize } from '../components/globalstyles';

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
              <TouchableOpacity onPress={() => this._navTo('Profile')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                    <Icon
                      name='account'
                      type='material-community'
                      size={settingsIconSize}
                      color='#fff' />
                    <Text style={styles.settingsText}>My Account</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsRow}>
              <TouchableOpacity onPress={() => this._navTo('Notifications')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='bell'
                    type='material-community'
                    size={settingsIconSize}
                    color='#fff' />
                  <Text style={styles.settingsText}>Notifications</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsRow}>
                <View style={styles.optionView}>
                  <Icon
                    name='earth'
                    type='material-community'
                    size={settingsIconSize}
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
              <TouchableOpacity onPress={() => this._navTo('About')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='information'
                    type='material-community'
                    size={settingsIconSize}
                    color='#fff' />

                  <Text style={styles.settingsText}>About</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsRow}>
              <TouchableOpacity onPress={this._signOutAsync} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Icon
                    name='logout'
                    type='material-community'
                    size={settingsIconSize}
                    color='#fff' />

                  <Text style={styles.settingsText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          <BottomNavigation />
         </View>
      </View>
    );
  }

  _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
  };

  _signOutAsync = async () => {
    AsyncStorage.removeItem('userToken');
    await AsyncStorage.clear();

    this.props.navigation.navigate('Auth');
  };
}

export default SettingsScreen