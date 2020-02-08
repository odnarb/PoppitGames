import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { profileStyleSheet as styles } from '../components/globalstyles';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'My Account',
  };

  render() {
    return (
      <View style={styles.baseContainer}>

          <View style={styles.contentContainer}>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsLabel}>Full Name: </Text>
              <Text style={styles.settingsValue}>John Smith</Text>
            </View>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsLabel}>Email Address: </Text>
              <Text style={styles.settingsValue}>john.smith@gmail.com</Text>
            </View>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsLabel}>Birthdate: </Text>
              <Text style={styles.settingsValue}>3/7/1980</Text>
            </View>

            <View style={styles.settingsRow}>
              <Text style={styles.settingsLabel}>Location: </Text>
              <Text style={styles.settingsValue}>Tucson, AZ</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('ProfileEdit')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.btnDark}>{'Edit Account'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default ProfileScreen