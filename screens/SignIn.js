import React from 'react';

//    "@react-native-community/google-signin": "^3.0.3",
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
// <GoogleSigninButton
//   style={{ width: 332, height: 64 }}
//   size={GoogleSigninButton.Size.Wide}
//   color={GoogleSigninButton.Color.Dark}
//   onPress={this._signIn}
//   disabled={this.state.isSigninInProgress} />

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

import {
  signInStyleSheet as styles,
  signInIconSize as iconSize,
  whiteColor
} from '../components/globalstyles';

import { app } from '../components/globalconstants';

class SignInScreen extends React.Component {

  componentDidMount() {
    this._startSignInScreenAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _startSignInScreenAsync = async () => {
    let signup = this.props.navigation.getParam('signup')

    if( signup ) {
      this.setState({
        btnFBWording: "Signup with Facebook",
        btnGoogleWording:  "Signup with Google",
        btnEmailWording: "Signup with Email"
      })
    }
  }

  state = {
    isFocused: false,
    btnFBWording : "Signin with Facebook",
    btnGoogleWording: "Signin with Google",
    btnEmailWording: "Signin with Email"
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
            <TouchableOpacity style={{height: 35, width: "100%", alignItems: "center", justifyContent: "center" }} onPress={() => this._signUp()}>
              <Text style={[styles.grey,styles.learnMoreText]}>New to {app.name}? Sign up.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 35, width: "100%", alignItems: "center", justifyContent: "center" }} onPress={() => this._learnMore()}>
              <Text style={[styles.grey,styles.learnMoreText]}>Tap to learn more.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFB} onPress={() => this._ssoSignIn('fb')}>
              <View style={styles.btnView}>
                <Icon
                  name='facebook'
                  type='material-community'
                  size={iconSize}
                  color={whiteColor}
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>{btnFBWording}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnGoogle} onPress={() => this._ssoSignIn('google')}>
              <View style={styles.btnView}>
                <Icon
                  name='google'
                  type='material-community'
                  size={iconSize}
                  color={whiteColor}
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>{btnGoogleWording}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
              <View style={styles.hr} />
              <Text style={styles.loginSeparatorText}> OR </Text>
              <View style={styles.hr} />
            </View>

            <TouchableOpacity style={styles.btnEmail} onPress={() => this._signIn()}>
              <View style={styles.btnView}>
                <Icon
                  name='email'
                  type='material-community'
                  size={iconSize}
                  color={whiteColor}
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

  _ssoSignIn = async(provider) => {
    //provider is either fb or google
    this._signInAsync();
  }

  _signUp = async () => {
    this.props.navigation.navigate('EmailSignUp');
  }

  _signIn = async () => {
    this.props.navigation.navigate('EmailSignIn');
  }

  _signInAsync = async () => {
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen
