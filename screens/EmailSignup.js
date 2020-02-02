import React from 'react';

import {
  Image,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import BCPasswordInputText from '../components/BCPasswordInputText';

import { emailSignUpStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignupScreen extends React.Component {
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
      //onValueChange of the switch this function will be called
      this.setState({agreeToTerms: value})
      //state changes according to switch
      //which will result in re-render the text
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
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain"
          ></Image>
        </View>

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

          <View style={styles.termsContainer}>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {agreeToTerms}
              style={styles.switch} />
            <Text style={styles.termsText}>I agree to the </Text>

            <TouchableHighlight style={{marginLeft: 10, marginTop: 5}} onPress={() => this._navTo('Terms')} style={styles.optionBtn}>
              <View style={styles.optionBtnView}>
                <Text style={styles.textLink}>terms and conditions.</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.btnContainer}>
            <TouchableHighlight style={styles.buttonCancel} onPress={() => this._navTo('Home')}>
              <Text style={styles.btnCancel}>{'Cancel'.toUpperCase()}</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonSignup} onPress={() => this._navTo('Home')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.btnSignup}>{'Sign Up'.toUpperCase()}</Text>
                <Icon
                  name='chevron-right'
                  type='material-community'
                  size={iconMediumSize}
                  color="#bbb" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default EmailSignupScreen