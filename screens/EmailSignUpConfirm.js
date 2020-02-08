import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import { emailSignUpConfirmStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignUpConfirmScreen extends React.Component {
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
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <Text style={styles.textHeader}>Account Sign Up</Text>

          <Text style={styles.text}>We sent you an email with a link to confirm your account creation.</Text>

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