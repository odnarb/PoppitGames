import React from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LogoBanner from '../components/LogoBanner';

import { authLoadingStyleSheet as styles } from '../components/globalstyles';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    // setTimeout(() => {
    //     const userToken = AsyncStorage.getItem('userToken');
    //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // }, 5000)

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