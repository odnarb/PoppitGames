
const HARD_CODED_EMAIL = "john.smith@gmail.com";
const HARD_CODED_PW = "john123";

import React from 'react';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import BCPasswordInputText from '../components/BCPasswordInputText';

import { emailSignInStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      password: '',
      email: ''
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  state = {
    isFocused: false,
    email: '',
    password: ''
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

  render() {
    const { isFocused, email, password } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (

     <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain" />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                keyboardType='email-address'
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({email: text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
          </View>

          <View style={styles.inputContainer}>
            <BCPasswordInputText
                placeholder="Password"
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
          </View>
          <View style={styles.inputContainer}>
              <TouchableOpacity onPress={this._recoverPassword}>
                <Text>Recover password?</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonSignIn} onPress={this._signInAsync}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.btnSignIn}>{'Sign In'.toUpperCase()}</Text>
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