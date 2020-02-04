import React from 'react';

import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { aboutStyleSheet as styles } from '../components/globalstyles';

class AboutScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };
  }

  static navigationOptions = {
    title: 'About'
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

          <View style={styles.contentContainer}>
            <View style={styles.settingsRow}>
              <TouchableHighlight onPress={() => this._navTo('Terms')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Text style={styles.settingsText}>Terms of Use</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.settingsRow}>
              <TouchableHighlight onPress={() => this._navTo('PrivacyPolicy')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Text style={styles.settingsText}>Privacy Policy</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.copyrightRow}>
              <Text style={styles.copyrightText}>© Copyright Poppit Games LLC</Text>
            </View>
          </View>
      </View>
    );
  }
  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default AboutScreen