import React from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { emailSignInErrorStyleSheet as styles } from '../components/globalstyles';

class EmailSignInErrorScreen extends React.Component {

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (

     <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/poppit-logo.png")}
              style={styles.logo}
              resizeMode="contain" />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.textHeader}>Oops! Couldn't sign in..</Text>
          <Text style={styles.text}>Your username and password don't match.{'\n'}Please try again.</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonTryAgain} onPress={() => this._navTo('Home')}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name='chevron-left'
                  type='material-community'
                  size={32}
                  color="#bbb" />
                <Text style={styles.btnTryAgain}>{'Try Again'.toUpperCase()}</Text>
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

export default EmailSignInErrorScreen