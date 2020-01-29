import React from 'react';

import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import PasswordInputText from '../components/PasswordInputText';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textLink: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  textInput: {
    fontSize: 18,
    marginTop: 10,
    width: "100%"
  },

  termsContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 20
  },

  termsText: {
    color: '#444',
    fontSize: 16,
    marginLeft: 10
  },

  termsText: {
    color: '#444',
    fontSize: 16,
    marginLeft: 10
  },

  buttonCancel: {
    width: "100%",
    height: 64,
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  buttonSignup: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnCancel: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

  btnSignup: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

});


class EmailSignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      password: '',
      confirm_password: ''
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  state = {
    isFocused: false,
    switchValue:false
  };

  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
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
    const { isFocused,password,confirm_password } = this.state;
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
              autoFocus={true}
              placeholder="Full Name"
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({text})}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <TextInput
              placeholder="Email"
              keyboardType='email-address'
              style={styles.textInput}
              selectionColor="#428AF8"
              underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
              onChangeText={(text) => this.setState({text})}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur} />

          <PasswordInputText
              label=""
              placeholder="Password"
              style={styles.textInput}
              getRef={input => this.input = input}
              value={password}
              onChangeText={(password) => this.setState({ password })} />

          <PasswordInputText
              label=""
              placeholder="Confirm Password"
              style={styles.textInput}
              getRef={input => this.input = input}
              value={confirm_password}
              onChangeText={(confirm_password) => this.setState({ confirm_password })} />

          <View style={styles.termsContainer}>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue} />
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
                  size={32}
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