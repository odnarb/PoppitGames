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
  AsyncStorage,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1
  },

  marginContainer: {
    flex: 1
  },

  logoContainer: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    flex: 1
  },

  contentContainer: {
    backgroundColor: 'green',
    flex: 4,
    alignItems: 'center'
  },

  separatorContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },

  logo: {
    width: 364,
    height: 118
  },

  btnFB:{
    color: '#3b5998',
    width: "80%",
    height: 64
  },

  btnGoogle:{
    color: '#4285F4',
    marginTop: 30,
    width: "80%",
    height: 64
  },

  hr: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: "30%"
  },

  loginSeparatorText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  inputEmail: {
    width: "80%"
  }
});

class SignInScreen extends React.Component {

  state = {
    isFocused: false
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
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (

     <View style={styles.baseContainer}>
        <View style={styles.marginContainer} />

        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
          ></Image>
        </View>

        <View style={styles.contentContainer}>
          <Button title="Signup with Facebook"
            style={styles.btnFB}
            onPress={this._signInAsync} />
          <Button title="Signup with Google"
            style={styles.btnGoogle}
            onPress={this._signInAsync} />

          <View style={styles.separatorContainer}>
            <View style={styles.hr} />
            <Text style={styles.loginSeparatorText}>OR</Text>
            <View style={styles.hr} />
          </View>

          <View>
            <TextInput
                placeholder="Enter your email"
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.inputEmail}
                {...otherProps}
                //value={this.state.text}
            />
          <Button title="Signup with Email"
            style={styles.btnEmail}
            onPress={this._signInAsync} />
          </View>
        </View>
      </View>

    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen