import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({

  baseContainer: {
        flex: 1
  },

  logoContainer: {
    flex: 1,
    paddingTop: moderateScale(10, 0.4),
    alignItems: 'center'
  },

  logo: {
    height: moderateScale(50, 0.4)
  },

  contentContainer: {
    flex: 7
  },

  btnContainer: {
    backgroundColor: "#58d5ff",
    marginTop: 3,
    alignItems: "center"
  },

  btnTitle: {
    fontSize: moderateScale(14, 0.4),
    color: "#fff"
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain" />
        </View>

        <View style={styles.contentContainer}>

          <Text style={{ fontSize: moderateScale(16, 0.4),padding: 20 }}>Click around to check the static layouts (much like static HTML)</Text>

          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('Game')}><Text style={styles.btnTitle}>Play Penalty Kicks!</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('Maps')}><Text style={styles.btnTitle}>Map Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('Prizes')}><Text style={styles.btnTitle}>Prizes Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('Settings')}><Text style={styles.btnTitle}>Settings Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('ProfileEdit')}><Text style={styles.btnTitle}>PROFILE EDIT SCREEN</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('About')}><Text style={styles.btnTitle}>About Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('LearnMore')}><Text style={styles.btnTitle}>Learn More Screens</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('EmailSignUp')}><Text style={styles.btnTitle}>Email SignUp Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('EmailSignIn')}><Text style={styles.btnTitle}>Email Sign In Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('EmailSignInError')}><Text style={styles.btnTitle}>Email Sign In Error Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('RecoverPassword')}><Text style={styles.btnTitle}>Recover Password Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this._navTo('RecoverPasswordConfirm')}><Text style={styles.btnTitle}>Recover Password Confirm Screen</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={this._signOutAsync}><Text style={styles.btnTitle}>Sign Out</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen