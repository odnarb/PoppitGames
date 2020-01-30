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

            <Text style={styles.headerText}>My Account</Text>

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