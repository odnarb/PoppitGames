import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import { emailSignInErrorStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class EmailSignInErrorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.signin_error = this.props.navigation.getParam('signin_error');
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (

     <View style={styles.baseContainer}>
        <LogoBanner size="scaled" />

        <View style={styles.contentContainer}>
          <Text style={[styles.grey,styles.textHeader]}>Oops! Couldn't sign in..</Text>
          <Text style={[styles.grey,styles.text]}>{this.signin_error}{'\n\n'}Please try again.</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonDark} onPress={() => this.props.navigation.goBack()}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name='chevron-left'
                  type='material-community'
                  size={iconMediumSize}
                  color="#bbb" />
                <Text style={styles.btnDark}>{'Try Again'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default EmailSignInErrorScreen
