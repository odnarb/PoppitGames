import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 6,
  },

  logoContainer: {
    flex:2,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  textContainer: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
    width: "100%"
  },

  text: {
    fontSize: 18,
    marginTop: 6,
    width: "100%",
    color: "#777"
  },

  btnContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
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
              resizeMode="contain"
          ></Image>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Oops! Couldn't sign in..</Text>
          <Text style={styles.text}>Your username and password don't match.{'\n'}Please try again.</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonTryAgain} onPress={() => this._navTo('Home')}>
            <Text style={styles.btnTryAgain}>{'Try Again'.toUpperCase()}</Text>
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

export default EmailSignInErrorScreen