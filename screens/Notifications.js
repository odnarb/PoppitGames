import React from 'react';

import {
  Image,
  Switch,
  Text,
  View
} from 'react-native';

import { notificationsStyleSheet as styles } from '../components/globalstyles';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  state = {
    switchValue1:false,
    switchValue2:false,
    switchValue3:false
  };

  render() {
    return (

      <View style={{
        flex: 1,
        backgroundColor: '#666'
      }}>
        <View style={styles.topMargin}></View>
        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={styles.optionHeader}>App Features & Updates</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this.setState({switchValue1: value})}
              value = {this.state.switchValue1} />
          </View>
          <Text style={styles.optionDescription}>Get notified whenever new features are available.</Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={styles.optionHeader}>Nearby Deals</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this.setState({switchValue2: value})}
              value = {this.state.switchValue2} />
          </View>
          <Text style={styles.optionDescription}>Get notified whenever you are near participating locations.</Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={styles.optionHeader}>Recommended Deals</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this.setState({switchValue3: value})}
              value = {this.state.switchValue3} />
          </View>
          <Text style={styles.optionDescription}>Get notified whenever we have a new recommended deal for you.</Text>
        </View>


        <View style={styles.optionRow}>
          <View style={styles.optionContainer}>
            <Text style={styles.optionHeader}>Email Subscriptions</Text>
          </View>
          <Text style={styles.optionSubHeader}>Need help unsubcribing to email?</Text>
          <Text style={styles.optionDescription}>Every email sent by Poppit has an unsubscribe link at the bottom of the email. You can also unsubscribe on our website. Find out how by visiting our <Text style={{ textDecorationLine: 'underline' }}>Help Center.</Text></Text>
        </View>
      </View>
    );
  }
}

export default NotificationsScreen