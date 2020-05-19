import React from 'react';

import {
  Picker,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import BottomNavigation from '../components/BottomNavigation';

import {
  settingsStyleSheet as styles,
  settingsIconSize,
  greyColor
} from '../components/globalstyles';

class SettingsScreen extends React.Component {
    constructor(props) {
    super(props);
    // this.state = {
    //   language: 'english'
    // };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
/* This used to be placed right above the "About" section
              <View style={styles.settingsRow}>
                  <View style={styles.optionView}>
                    <Icon
                      name='earth'
                      type='material-community'
                      size={settingsIconSize}
                      color={greyColor} />
                    <Text style={[styles.grey,styles.settingsText]}>Language:</Text>

                    <Picker
                      selectedValue={this.state.language}
                      style={[styles.grey,styles.picker]}
                      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})
                      }>
                      <Picker.Item label="English" value="english" />
                      <Picker.Item label="Spanish" value="spanish" />
                      <Picker.Item label="French" value="french" />
                      <Picker.Item label="Dutch" value="dutch" />
                    </Picker>
                  </View>
              </View>
*/
    return (
      <View style={styles.baseContainer}>
          <LogoBanner container="flex1" size="small" />

          <View style={styles.contentContainer}>

            <Text style={[styles.grey,styles.padLeft20,styles.textHeader]}>Settings</Text>

            <ScrollView>
              <View style={styles.settingsRow}>
                <TouchableOpacity onPress={() => this._navTo('Profile')} style={styles.optionBtn}>
                  <View style={styles.optionBtnView}>
                      <Icon
                        name='account'
                        type='material-community'
                        size={settingsIconSize}
                        color={greyColor} />
                      <Text style={[styles.grey,styles.settingsText]}>My Account</Text>
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
                      color={greyColor} />
                    <Text style={[styles.grey,styles.settingsText]}>Notifications</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.settingsRow}>
                <TouchableOpacity onPress={() => this._navTo('About')} style={styles.optionBtn}>
                  <View style={styles.optionBtnView}>
                    <Icon
                      name='information'
                      type='material-community'
                      size={settingsIconSize}
                      color={greyColor} />

                    <Text style={[styles.grey,styles.settingsText]}>About</Text>
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
                      color={greyColor} />

                    <Text style={[styles.grey,styles.settingsText]}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
