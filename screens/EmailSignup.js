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

import { emailSignUpStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
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

  state = {
      isFocused: false,
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
      agreeToTerms:false
  };

  toggleSwitch = (value) => {
      this.setState({agreeToTerms: value})
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
    const { isFocused,fullname,email,password,confirm_password,agreeToTerms } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (

     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <TextInput
              placeholder="Full Name"
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({fullname: text})}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <TextInput
              placeholder="Email"
              keyboardType='email-address'
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({email: text})}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <BCPasswordInputText
              placeholder="Password"
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <BCPasswordInputText
              placeholder="Confirm Password"
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              value={confirm_password}
              onChangeText={(text) => this.setState({ confirm_password: text })}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <View style={styles.switchContainer}>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {agreeToTerms}
              style={styles.switch} />
            <Text style={styles.termsText}>I agree to the </Text>

            <TouchableOpacity style={{marginLeft: 10, marginTop: 5}} onPress={() => this.props.navigation.navigate("TermsPreSignUp")} style={styles.optionBtn}>
              <View style={styles.optionBtnView}>
                <Text style={styles.textLink}>terms and conditions.</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonLight} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.btnLight}>{'Cancel'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDark} onPress={() => this._signUp()}>
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

    await AsyncStorage.setItem('userSeen', "true");

    this.props.navigation.navigate('EmailSignUpConfirm');
  };

}

export default EmailSignUpScreen