import React from 'react';

import {
  Image,
  Picker,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

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
    flexDirection: 'row',
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

              <Icon
                name='account'
                type='material-community'
                size={28}
                color='#fff' />

              <Text style={styles.settingsText}>My Profile</Text>
            </View>

            <View style={styles.settingsRow}>
              <Icon
                name='bell'
                type='material-community'
                size={28}
                color='#fff' />

              <Text style={styles.settingsText}>Notifications</Text>
            </View>

            <View style={styles.settingsRow}>

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

            <View style={styles.settingsRow}>

              <Icon
                name='information'
                type='material-community'
                size={28}
                color='#fff' />

              <Text style={styles.settingsText}>About</Text>
            </View>

            <View style={styles.settingsRow}>
              <Icon
                name='logout'
                type='material-community'
                size={28}
                color='#fff' />

              <Text style={styles.settingsText}>Logout</Text>
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


          <BottomNavigation />
      </View>
    );
  }
}

export default SettingsScreen