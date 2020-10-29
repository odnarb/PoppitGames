
const HARD_CODED_EMAIL = "john.smith@gmail.com";
const HARD_CODED_PW = "john123";

import React from 'react';

import {
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import BCPasswordInputText from '../components/BCPasswordInputText';

import { emailSignInStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailFocused: false,
      isPasswordFocused: false,
      email: '',
      password: '',
      keepMeSignedIn: false
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  state = {
    isEmailFocused: false,
    isPasswordFocused: false,
    email: '',
    password: '',
    keepMeSignedIn: false
  };

  toggleSwitch = (value) => {
      this.setState({keepMeSignedIn: value})
  };

  handleFocus = (key, event) => {
      this.setState({ [key]: true });
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
  };

  handleBlur = (key, event) => {
      this.setState({ [key]: false });
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
  };

  render() {
    const { isEmailFocused, isPasswordFocused, email, password, keepMeSignedIn } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (

     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                keyboardType='email-address'
                style={[styles.grey,styles.textInput]}
                selectionColor="#428AF8"
                underlineColorAndroid={ isEmailFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({email: text})}
                onFocus={(e) => {this.handleFocus(e, 'isEmailFocused')}}
                onBlur={this.handleBlur} />
          </View>

          <View style={styles.inputContainerNoMargin}>
            <BCPasswordInputText
                placeholder="Password"
                style={[styles.grey,styles.textInput]}
                selectionColor="#428AF8"
                underlineColorAndroid={ isPasswordFocused? "#428AF8" : "#D3D3D3" }
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
                onFocus={(e) => {this.handleFocus(e, 'isPasswordFocused')}}
                onBlur={this.handleBlur} />
          </View>

          <View style={styles.switchContainer}>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {keepMeSignedIn}
              style={styles.switch} />
            <Text style={[styles.grey,styles.switchText]}>Keep me signed in.</Text>
          </View>

          <View style={styles.recoverPwContainer}>
              <TouchableOpacity onPress={() => this._recoverPassword()}>
                <Text style={[styles.grey,styles.marginBottom10,styles.recoverPwLink]}>Recover password?</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonDark} onPress={() => this._signInAsync()}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.btnDark}>{'Sign In'.toUpperCase()}</Text>
              <Icon
                name='chevron-right'
                type='material-community'
                size={iconMediumSize}
                color="#bbb" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _recoverPassword = () => {
    this.props.navigation.navigate('RecoverPassword');
  }

  _signInAsync = async () => {
    //get values from email and password fields
    const email = this.state.email;
    const password = this.state.password;

    let ev = require("email-validator");

    if( !ev.validate(email) ){
      this.props.navigation.navigate('EmailSignInError', {
        signin_error: "ERROR: Invalid email address"
      });
    } else if( password == ""){
      this.props.navigation.navigate('EmailSignInError', {
        signin_error: "ERROR: Invalid password"
      });
    } else {

      let formData = {
        email: email,
        password: password
      };

      if( this.state.keepMeSignedIn ){
        formData.remember = "on"
      }

      let loginReqOpts = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      };

      console.log("POPPIT LOGIN :: loginReqOpts: ", loginReqOpts)

      fetch("http://poppitgames.mynetgear.com:7777/appuser/login", loginReqOpts)
        .then(loginRes => {
            console.log( "POPPIT LOGIN :: COOKIE: ", loginRes.headers.get("set-cookie") )
            return loginRes.json()
        })
        .then(loginResJson => {
          console.log("POPPIT LOGIN :: loginResJson: ", loginResJson);
          if( loginResJson.success == true ){
            console.log("SUCCESS: Sign in successful!");
            this.props.navigation.navigate('App');
          } else {
            this.props.navigation.navigate('EmailSignInError', {
              signin_error: "ERROR: Your username and password don't match."
            });
          }
        })
        .catch(error => {
          console.log("POPPIT LOGIN :: error: ", error);
        })
    }

      // await AsyncStorage.setItem('userToken', 'abc');
      // await AsyncStorage.setItem('userSeen', "true");

  };

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default EmailSignInScreen
