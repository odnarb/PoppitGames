import React from 'react';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { recoverPasswordStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class RecoverPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
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
          <Text style={styles.textHeader}>Recover Password</Text>

          <Text style={styles.text}>Please enter the email address you used to register with us and we'll send you a link for recovering your password with.</Text>

            <TextInput
                placeholder="Enter Email"
                keyboardType='email-address'
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonLight} onPress={() => this._navTo('Home')}>
            <Text style={styles.btnLight}>{'Cancel'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('Home')}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.btnDark}>{'Reset Password'.toUpperCase()}</Text>
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
  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default RecoverPasswordScreen