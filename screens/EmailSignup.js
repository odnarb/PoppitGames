import React from 'react';

import {
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import BCPasswordInputText from '../components/BCPasswordInputText';

import { _sendSignupReq } from '../components/globallib';

import { emailSignUpStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isNameFocused: false,
      isEmailFocused: false,
      isPassword1Focused: false,
      isPassword2Focused: false,
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
      agreeToTerms:false
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  toggleSwitch = (value) => {
      this.setState({agreeToTerms: value})
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

  _renderError = () => {
    if( this.state.error !== '' ) {
      console.log("POPPIT GAMES :: signup : this.state.error: ", this.state.error)
      let errorText = "ERROR: Please fill out all fields and agree to the terms."
      if (this.state.error_text !== '') {
        errorText = `ERROR: ${this.state.error_text}`
      }
      return (<Text style={{ color: "#ff0000" }}>{errorText}</Text>);
    } else {
      return null
    }
  };

  render() {
    const {
        error,
        isNameFocused,
        isEmailFocused,
        isPassword1Focused,
        isPassword2Focused,
        fullname,
        email,
        password,
        confirm_password,
        agreeToTerms
    } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (

     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          {this._renderError()}
          <TextInput
              placeholder="Full Name"
              style={[styles.grey,styles.textInput]}
              selectionColor={ (error === 'fullname')? "#ff0000" : "#428AF8" }
              underlineColorAndroid={ isNameFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({fullname: text})}
              onFocus={(e) => {this.handleFocus(e, 'isNameFocused')}}
              onBlur={(e) => {this.handleBlur(e, 'isNameFocused')}} />

          <TextInput
              placeholder="Email"
              keyboardType='email-address'
              style={[styles.grey,styles.textInput]}
              selectionColor={ (error === 'email')? "#ff0000" : "#428AF8" }
              underlineColorAndroid={ isEmailFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({email: text})}
              onFocus={(e) => {this.handleFocus(e, 'isEmailFocused')}}
              onBlur={(e) => {this.handleBlur(e, 'isEmailFocused')}} />

          <BCPasswordInputText
              placeholder="Password"
              style={[styles.grey,styles.textInput]}
              selectionColor={ (error === 'password')? "#ff0000" : "#428AF8" }
              underlineColorAndroid={ isPassword1Focused? "#428AF8" : "#D3D3D3" }
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
              onFocus={(e) => {this.handleFocus(e, 'isPassword1Focused')}}
              onBlur={(e) => {this.handleBlur(e, 'isPassword1Focused')}} />

          <BCPasswordInputText
              placeholder="Confirm Password"
              style={[styles.grey,styles.textInput]}
              selectionColor={ (error === 'confirm_password')? "#ff0000" : "#428AF8" }
              underlineColorAndroid={ isPassword2Focused? "#428AF8" : "#D3D3D3" }
              value={confirm_password}
              onChangeText={(text) => this.setState({ confirm_password: text })}
              onFocus={(e) => {this.handleFocus(e, 'isPassword2Focused')}}
              onBlur={(e) => {this.handleBlur(e, 'isPassword2Focused')}} />

          <View style={styles.switchContainer}>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {agreeToTerms}
              style={styles.switch} />
            <Text style={[styles.grey,styles.termsText]}>I agree to the </Text>

            <TouchableOpacity style={{marginLeft: 10, marginTop: 5}} onPress={() => this.props.navigation.navigate("TermsPreSignUp")} style={styles.optionBtn}>
              <View style={styles.optionBtnView}>
                <Text style={[styles.grey,styles.textLink]}>terms and conditions.</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonLight} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.btnLight}>{'Cancel'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDark} onPress={() => this._validateForm()}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.btnDark}>{'Sign Up'.toUpperCase()}</Text>
                <Icon
                  name='chevron-right'
                  type='material-community'
                  size={iconMediumSize}
                  color="#bbb" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _validateForm = async () => {
    let error = false
    let newstate = {
      isNameFocused: false,
      isEmailFocused: false,
      isPassword1Focused: false,
      isPassword2Focused: false,
      error: '',
      error_text: ''
    }

    if( this.state.fullname === '' ){
      error = true;
      newstate.isNameFocused = true;
      newstate.error = 'fullname';
      newstate.error_text = 'Please enter your name';
    } else if( this.state.email === '' ){
      error = true;
      newstate.isEmailFocused = true;
      newstate.error = 'email';
      newstate.error_text = 'Please enter a valid email address.';
    } else if( this.state.password === '' ){
      error = true;
      newstate.isPassword2Focused = false;
      newstate.error = 'password';
      newstate.error_text = 'Please enter a password.';
    } else if( this.state.confirm_password === '' ){
      error = true;
      newstate.isPassword2Focused = true;
      newstate.error = 'confirm_password';
      newstate.error_text = 'Please confirm your password.';
    } else if( this.state.password !== this.state.confirm_password ){
      error = true;
      newstate.isPassword2Focused = true;
      newstate.error = 'confirm_password';
      newstate.error_text = 'Passwords must match.';
    } else if( this.state.agreeToTerms !== true ){
      error = true;
      newstate.error = 'agreeToTerms';
      newstate.error_text = 'Please review and agree to the terms and conditions.';
    }

    if( error === true ){
      //show errors
      console.log("POPPITGAMES :: Errors detected", this.state)
      this.setState(newstate)
      return;
    } else {
      console.log("POPPITGAMES :: Signup auth'd -- send request!", this.state)
      this._signUp()
    }
  };

  _signUp = async () => {
    //get values from email and password fields
    const signUpPayload = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      agreeToTerms: this.state.agreeToTerms
    };

    console.log("Email signup payload:", signUpPayload);

    let res = await _sendSignupReq(signUpPayload)

    console.log("POPPITGAMES :: _sendSignupReq :: res", res)

    this.props.navigation.navigate('EmailSignUpConfirm');
  };

}

export default EmailSignUpScreen
