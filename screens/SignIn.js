import React from 'react';

//    "@react-native-community/google-signin": "^3.0.3",
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
// <GoogleSigninButton
//   style={{ width: 332, height: 64 }}
//   size={GoogleSigninButton.Size.Wide}
//   color={GoogleSigninButton.Color.Dark}
//   onPress={this._signIn}
//   disabled={this.state.isSigninInProgress} />

const appName = "PoppitGames";

import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LogoBanner from '../components/LogoBanner';

import { Icon } from 'react-native-elements';

import { signInStyleSheet as styles, signInIconSize as iconSize } from '../components/globalstyles';

class SignInScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userSeen = await AsyncStorage.getItem('userSeen');

    if(userSeen) {
      this.setState({
        btnFBWording : "Signin with Facebook",
        btnGoogleWording: "Signin with Google",
        btnEmailWording: "Signin with Email"
      })
    }
  }

  state = {
    isFocused: false,
    btnFBWording: "Signup with Facebook",
    btnGoogleWording:  "Signup with Google",
    btnEmailWording: "Signup with Email"
  };

  handleFocus = event => {
      this.setState({ isFocused: true });
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
  };

  handleBlur = event => {
      this.setState({ isFocused: false });
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
  };

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    const { isFocused, btnFBWording, btnGoogleWording, btnEmailWording } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (

     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
            <TouchableOpacity style={{height: 35, width: "100%", alignItems: "center", justifyContent: "center" }} onPress={() => this._learnMore()}>
              <Text>New to {appName}? Tap to learn more.</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btnFB} onPress={() => this._ssoFB()}>
              <View style={styles.btnView}>
                <Icon
                  name='facebook'
                  type='material-community'
                  size={iconSize}
                  color='#fff'
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>{btnFBWording}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnGoogle} onPress={() => this._ssoGoogle()}>
              <View style={styles.btnView}>
                <Icon
                  name='google'
                  type='material-community'
                  size={iconSize}
                  color='#fff'
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>{btnGoogleWording}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
              <View style={styles.hr} />
              <Text style={styles.loginSeparatorText}> OR </Text>
              <View style={styles.hr} />
            </View>

            <TouchableOpacity style={styles.btnEmail} onPress={() => this._signInOrSignUp()}>
              <View style={styles.btnView}>
                <Icon
                  name='email'
                  type='material-community'
                  size={iconSize}
                  color='#fff'
                  style={styles.btnIcon} />
              <Text style={styles.btnText}>{btnEmailWording}</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>

    );
  }

  _learnMore = () => {
    this.props.navigation.navigate('LearnMore');
  };

  _ssoFB = async() => {
    this._signInAsync();
  }

  _ssoGoogle = () => {
    this._signInAsync();
  }

  _signInOrSignUp = async () => {
    const userSeen = await AsyncStorage.getItem('userSeen');

    console.log("_signInOrSignUp: userSeen :: ", userSeen);

    if( userSeen == "true" ){
      this.props.navigation.navigate('EmailSignIn');
    } else {
      this.props.navigation.navigate('EmailSignUp');
    }
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    await AsyncStorage.setItem('userSeen', "true");

    this.props.navigation.navigate('App');
  };
}

export default SignInScreen