import React from 'react';

import {
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { notificationsStyleSheet as styles } from '../components/globalstyles';

import AsyncStorage from '@react-native-community/async-storage';

import PushNotification from 'react-native-push-notification'

import { app } from '../components/globalconstants';

class NotificationsScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notify_app_feature_update:false,
      notify_nearby:false,
      notify_recommended_deals:false
    };

    let keys = ["notify_app_feature_update", "notify_nearby", "notify_recommended_deals"];
    this._getNotification(keys, (stateObj) => {
      this.setState(stateObj);
    });
  }

  static navigationOptions = {
    title: 'Notifications'
  };

  _setNotification = (notification, cb) => {
    let stateObj = {};

    stateObj[ Object.keys(notification)[0] ] = Object.values(notification)[0];

    this.setState(stateObj);

    let stateBool = Object.values(notification)[0];
    let stateStr = "false";
    if( stateBool === true ){
      stateStr = "true";
    }

    AsyncStorage.setItem(Object.keys(notification)[0], stateStr);
  };

  _getNotification = (keys,cb) => {
    AsyncStorage.multiGet(keys).then(res => {
      let stateObj = {};
      //loop through what we have on this page, and get their values
      for(let i=0; i < keys.length;i++){
        if( res[i][0] !== undefined ){
          let stateStr = res[i][1];
          let stateBool = false;
          if( stateStr === "true" ){
            stateBool = true;
          }
          stateObj[ res[i][0] ] = stateBool;
        }
      }
      cb(stateObj);
    });
  };

  LocalNotification = () => {
    PushNotification.localNotification({
      /* Android Only Properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      ticker: "My Notification Ticker", // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      subText: "This is a subText", // (optional) default: none
      color: "red", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: "some_tag", // (optional) add tag to message
      group: "group", // (optional) add group to message
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      priority: "high", // (optional) set notification priority, default: high
      visibility: "private", // (optional) set notification visibility, default: private
      importance: "high", // (optional) set notification importance, default: high
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      ignoreInForeground: true, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)

      /* iOS only properties */
      alertAction: "view", // (optional) default: view
      category: "", // (optional) default: empty string
      userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

      /* iOS and Android properties */
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
      playSound: false, // (optional) default: true
      soundName: "poppit_sound", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      // repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      // actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
    });
  }

  render() {
/* This was after "Nearby Deals"
        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={[styles.grey,styles.optionHeader]}>Recommended Deals</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this._setNotification({notify_recommended_deals: value})}
              value = {this.state.notify_recommended_deals} />
          </View>
          <Text style={[styles.grey,styles.optionDescription]}>Get notified whenever we have a new recommended deal for you.</Text>
        </View>

*/
    return (
      <View style={styles.baseContainer}>

      <View>
        <TouchableOpacity style={styles.buttonBlue} onPress={() => this.LocalNotification()}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.btnBlue}>{'Local notification'.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>

        <View style={styles.topMargin}></View>
        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={[styles.grey,styles.optionHeader]}>App Features & Updates</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this._setNotification({notify_app_feature_update: value})}
              value = {this.state.notify_app_feature_update} />
          </View>
          <Text style={[styles.grey,styles.optionDescription]}>Get notified whenever new features are available.</Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.optionSwitchContainer}>
            <Text style={[styles.grey,styles.optionHeader]}>Nearby Deals</Text>
            <Switch style={styles.switchWithMargin}
              onValueChange = {(value) => this._setNotification({notify_nearby: value})}
              value = {this.state.notify_nearby} />
          </View>
          <Text style={[styles.grey,styles.optionDescription]}>Get notified whenever you are near participating locations.</Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.optionContainer}>
            <Text style={[styles.grey,styles.optionHeader]}>Email Subscriptions</Text>
          </View>
          <Text style={[styles.grey,styles.optionSubHeader]}>Need help unsubcribing to email?</Text>
          <Text style={[styles.grey,styles.optionDescription]}>Every email sent by {app.name} has an unsubscribe link at the bottom of the email. You can also unsubscribe on our website. Find out how by visiting our <Text style={{ textDecorationLine: 'underline' }}>Help Center.</Text></Text>
        </View>
      </View>
    );
  }
}

export default NotificationsScreen
