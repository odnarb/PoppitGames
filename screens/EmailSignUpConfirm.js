import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import { emailSignUpConfirmStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

import Unorderedlist from 'react-native-unordered-list';

class EmailSignUpConfirmScreen extends React.Component {
  constructor(props) {
    super(props);

    this.error = this.props.navigation.getParam('error');
    this.errors = this.props.navigation.getParam('errors');
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  _renderSignupResult = () => {
    let signup_message = "We sent you an email with a link to confirm your account creation.";

    if( this.error === true ){
      signup_message = "There were errors with your registration:";

      //loop through and show error messages
      return (
        <View>
          <Text style={{ color: "#ff0000" }}>{signup_message}</Text>
          {this.errors.map((item, key) => {
             return (
               <Unorderedlist color='red' key={key}><Text style={{ color: "#ff0000" }}>{item.error}</Text></Unorderedlist>
             );
          })}
        </View>
      );
    } else {
      return ( <Text style={[styles.grey,styles.text]}>{signup_message}</Text> );
    }
  }

  render() {
    return (
     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <Text style={[styles.grey,styles.textHeader]}>Account Sign Up</Text>

          {this._renderSignupResult()}

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonDark} onPress={() => this.props.navigation.navigate('AuthLoading')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name='chevron-left'
                  type='material-community'
                  size={iconMediumSize}
                  color="#bbb" />
                <Text style={styles.btnDark}>{'Back to Sign in'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default EmailSignUpConfirmScreen
