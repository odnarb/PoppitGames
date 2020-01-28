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
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1
  },

  logoContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 4,
    alignItems: 'center',
    padding: 20
  },

  btnTouch:{
    // flex: 1,
    flexDirection: "row",
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    marginTop: 20
  },

  btnView:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // textAlign:'center',
  },

  btnIcon: {
    marginLeft: 20,
    marginRight: 50
  },

  btnText: {
      color: '#dcdcdc',
      fontSize: 22,
      textAlign: "center",
      marginLeft: 50,
      marginRight: 50
  },

  separatorContainer: {
    flexDirection: 'row',
    width: "70%",
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  hr: {
    flex: 1,
    backgroundColor: '#A2A2A2',
    height: 2
  },

  loginSeparatorText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 20,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  inputEmail: {
    width: "100%",
    fontSize: 24,
    height: 64,
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
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain" />
        </View>

        <View style={styles.contentContainer}>

            <TouchableOpacity style={styles.btnTouch} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='facebook'
                  type='material-community'
                  size={56}
                  color='#dcdcdc'
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>Signup with Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnTouch} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='google'
                  type='material-community'
                  size={56}
                  color='#dcdcdc'
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>Signup with Google</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
              <View style={styles.hr} />
              <Text style={styles.loginSeparatorText}> OR </Text>
              <View style={styles.hr} />
            </View>

            <TextInput
                placeholder="Enter your email"
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.inputEmail}
                {...otherProps} />

            <TouchableOpacity style={styles.btnTouch} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='email'
                  type='material-community'
                  size={56}
                  color='#dcdcdc'
                  style={styles.btnIcon} />
              <Text style={styles.btnText}>Signup with Email</Text>
              </View>
            </TouchableOpacity>
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