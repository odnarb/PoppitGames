import React from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { aboutStyleSheet as styles } from '../components/globalstyles';

import LogoBanner from '../components/LogoBanner';

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
      <View style={styles.versionContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.versionRow}>
          <Text style={styles.versionText}>version 1.3.2 (0bdd85b1)</Text>
        </View>
      </View>

          <View style={styles.contentContainer}>
            <View style={styles.settingsRow}>
              <TouchableOpacity onPress={() => this._navTo('Terms')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Text style={styles.settingsText}>Terms of Use</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsRow}>
              <TouchableOpacity onPress={() => this._navTo('PrivacyPolicy')} style={styles.optionBtn}>
                <View style={styles.optionBtnView}>
                  <Text style={styles.settingsText}>Privacy Policy</Text>
                </View>
              </TouchableOpacity>
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