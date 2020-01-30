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
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from 'react-native-elements';

import { signInStyleSheet as styles } from '../components/globalstyles';

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

            <TouchableOpacity style={styles.btnFB} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='facebook'
                  type='material-community'
                  size={56}
                  color='#fff'
                  style={styles.btnIcon} />
                <Text style={styles.btnText}>Signup with Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnGoogle} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='google'
                  type='material-community'
                  size={56}
                  color='#fff'
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

            <TouchableOpacity style={styles.btnEmail} onPress={this._signInAsync}>
              <View style={styles.btnView}>
                <Icon
                  name='email'
                  type='material-community'
                  size={56}
                  color='#fff'
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