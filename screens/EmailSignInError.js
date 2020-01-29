import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';





import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30
  },

  text: {
    fontSize: 18,
    marginTop: 6,
    width: "100%",
    color: "#777"
  },

  buttonTryAgain: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnTryAgain: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

});


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