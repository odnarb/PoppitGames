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
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1
  },

  logoContainer: {
    // backgroundColor: 'yellow',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1
  },

marginContainer:{
    flex: 0.2
},

  contentContainer: {
    // backgroundColor: 'green',
    backgroundColor: 'transparent',
    flex: 4,
    alignItems: 'center',
  },

  btnContainer: {
    width: "90%",
    alignItems: 'center'
  },

  separatorContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  logo: {
    width: 364,
    height: 118
  },

  button:{
    width: "100%"
  },

  btnFB:{
    color: '#000000',
    marginTop: 30,
    backgroundColor: '#dcdcdc',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 16,
    height: 64,
    textAlign:'center',
  },

  btnGoogle:{
    color: '#000000',
    marginTop: 30,
    backgroundColor: '#dcdcdc',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 16,
    height: 64,
    textAlign:'center',
  },

  btnEmail:{
    color: '#000000',
    marginTop: 30,
    backgroundColor: '#dcdcdc',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 16,
    height: 64,
    textAlign:'center',
  },

  hr: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: "30%"
  },

  loginSeparatorText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  inputEmail: {
    fontSize: 18,
    width: "100%"
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

          <View style={styles.btnContainer}>

            <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
              <Text style={styles.btnFB}>Signup with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
              <Text style={styles.btnGoogle}>Signup with Google</Text>
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
                  {...otherProps}
                  //value={this.state.text}
              />
            <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
              <Text style={styles.btnEmail}>Signup with Email</Text>
            </TouchableOpacity>

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