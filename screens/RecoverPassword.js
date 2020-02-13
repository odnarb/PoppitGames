import React from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import { recoverPasswordStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class RecoverPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  state = {
    email: ""
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (
     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <Text style={[styles.grey,styles.textHeader]}>Recover Password</Text>

          <Text style={[styles.grey,styles.text]}>Please enter the email address you used to register with us and we will send you a link for recovering your password with.</Text>

            <TextInput
                placeholder="Enter Email"
                keyboardType='email-address'
                style={[styles.grey,styles.textInput]}
                selectionColor="#428AF8"
                underlineColorAndroid={ "#D3D3D3" }
                onChangeText={(text) => this.setState({email: text})} />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonLight} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.btnLight}>{'Cancel'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDark} onPress={this._recoverPassword}>
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
  _recoverPassword = () => {
    console.log("Recover password for: " + this.state.email);

    this.props.navigation.navigate('RecoverPasswordConfirm');
  }
}

export default RecoverPasswordScreen