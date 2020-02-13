import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import LogoBanner from '../components/LogoBanner';

import { recoverPasswordConfirmStyleSheet as styles, iconMediumSize } from '../components/globalstyles';

class RecoverPasswordConfirmScreen extends React.Component {
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
          <Text style={[styles.grey,styles.textHeader]}>Recover Password</Text>

          <Text style={[styles.grey,styles.text]}>We have sent you an email with a link to reset your password.</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('EmailSignIn')}>
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
  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default RecoverPasswordConfirmScreen