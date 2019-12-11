import React from 'react';

import {
  ActivityIndicator,
  AsyncStorage,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1
  },
  logoContainer: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4
  },
  contentContainer: {
    // backgroundColor: 'green',
    flex: 2
  },

  logo: {
    width: 364,
    height: 118
  },
  spinner: {
    // marginTop: 84
  },
  text: {
    textAlign: 'center'
  }
});

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
  setTimeout(() => {
      const userToken = AsyncStorage.getItem('userToken');
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }, 3000)

    return (

     <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/poppit-logo.png")}
            style={styles.logo}
        ></Image>
        </View>

        <View style={styles.contentContainer}>
          <ActivityIndicator style={styles.spinner} />
          <Text style={styles.text}>Loading</Text>
        </View>
      </View>

    );
  }
}

export default AuthLoadingScreen