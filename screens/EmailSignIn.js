
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
                <Text style={[styles.grey,styles.recoverPwLink]}>Recover password?</Text>
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
    console.log("EMAIL FIELD:", email);
    console.log("PASSWORD FIELD:", password);

    if( email == ""){
      console.log("ERROR: email is empty")
    } else if( password == ""){
      console.log("ERROR: password is empty")
    } else if (email == HARD_CODED_EMAIL && password == HARD_CODED_PW){
      await AsyncStorage.setItem('userToken', 'abc');
      await AsyncStorage.setItem('userSeen', "true");

      this.props.navigation.navigate('App');

      console.log("SUCCESS: Sign in successful!");
    } else {
      console.log("ERROR, EMAIL / PW DO NOT MATCH");
      this.props.navigation.navigate('EmailSignInError');
    }
  };

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default EmailSignInScreen