import React from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LogoBanner from '../components/LogoBanner';

import SInfo from 'react-native-sensitive-info';

import { authLoadingStyleSheet as styles } from '../components/globalstyles';

import { POPPIT_KEYCHAIN } from '../components/globalconstants';

import { _checkCookie } from '../components/globallib';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

    console.log("---------------------_bootstrapAsync()------------------------------");

    //if secure storage has a cookie, attempt a login
    let poppitCookie = await SInfo.getItem('poppit_cookie', {
        keychainService: POPPIT_KEYCHAIN
    });

    console.log("POPPITGAMES :: AuthLoading :: cookie from storage: ", poppitCookie);

    if( poppitCookie ){
      let cookieValidated = await _checkCookie({ cookie: poppitCookie });

      console.log("POPPITGAMES :: AuthLoading :: cookieValidated:", cookieValidated );

      if( cookieValidated.success === true ){
        console.log("POPPITGAMES :: AuthLoading :: COOKIE AUTHENTICATED" );

        this.props.navigation.navigate('App');
        return;
      }
    }
    this.props.navigation.navigate('Auth');
    console.log("---------------------_bootstrapAsync() DONE------------------------------");
  };

  // Render any loading content that you like here
  render() {
    return (
     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <ActivityIndicator size="large" />
          <Text style={[styles.grey, styles.text]}>Loading</Text>
        </View>
      </View>
    );
  }
}

export default AuthLoadingScreen
