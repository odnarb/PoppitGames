import React from 'react';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import PasswordInputText from '../components/PasswordInputText';

import { emailSignInStyleSheet as styles } from '../components/globalstyles';

class EmailSignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      password: '',
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

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

  render() {
    const { isFocused,password } = this.state;
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

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonSignIn} onPress={() => this._navTo('Home')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.btnSignIn}>{'Sign In'.toUpperCase()}</Text>
                <Icon
                  name='chevron-right'
                  type='material-community'
                  size={32}
                  color="#bbb" />
              </View>
            </TouchableOpacity>
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

export default EmailSignInScreen