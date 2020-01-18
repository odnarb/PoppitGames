import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  pageTitle: {
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  innerPageLogo: {
    alignItems: "center",
    height: 50
  },
  settingsText: {
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  copyrightText :{
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 14,
    color: '#ccc'
  },
  settingsRow: {
    flexDirection: 'row',
    paddingLeft: 12,
    marginTop: 20,
  },
  hr: {
    marginTop: 20,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
  }
});

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#666'
      }}>
          <View style={{ paddingTop: 10 }}>
            <Image style={styles.innerPageLogo} source={require('../assets/images/poppit-logo.png')} resizeMode='contain' />
          </View>

          <View style={{
            flex: 6
          }}>
            <Text style={styles.pageTitle}>Settings</Text>

            <View style={styles.settingsRow}>
              <Image source={require('../assets/wireframes/icon_placeholder.png')} />
              <Text style={styles.settingsText}>Notifications</Text>
            </View>

            <View style={styles.settingsRow}>
              <Image source={require('../assets/wireframes/icon_placeholder.png')} />
              <Text style={styles.settingsText}>Language</Text>
            </View>

            <View style={styles.settingsRow}>
              <Image source={require('../assets/wireframes/icon_placeholder.png')} />
              <Text style={styles.settingsText}>About</Text>
            </View>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsText}>Poppit version 1.3.2 (0bdd85b1)</Text>
            </View>

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


          <View style={{
                flex: 1.25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch'
              }}>
             <TouchableHighlight onPress={() => this._navTo('Profile')} style={{ flex: 1, backgroundColor: '#fff' }}>
                  <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_profile.png')} resizeMode="contain" />
              </TouchableHighlight>

             <TouchableHighlight onPress={() => this._navTo('Maps')} style={{ flex: 1, backgroundColor: '#fff' }}>
                  <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_search.png')} resizeMode="contain" />
              </TouchableHighlight>

             <TouchableHighlight onPress={() => this._navTo('Settings')} style={{ flex: 1, backgroundColor: '#fff' }}>
                  <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_settings.png')} resizeMode="contain" />
              </TouchableHighlight>
          </View>
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default SettingsScreen