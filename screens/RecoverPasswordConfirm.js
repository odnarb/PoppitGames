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
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex:2,
    marginTop: 40
  },

  contentContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textContainer: {
    flex: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  },

  textHeader: {
    fontSize: 20,
    color: '#000',
    marginBottom: 30
  },

  text: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

});

class RecoverPasswordConfirmScreen extends React.Component {
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
              resizeMode="contain"
          ></Image>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.textHeader}>Recover Password</Text>

          <Text style={styles.text}>We've sent you an email with a link to reset your password.</Text>

        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonDark}>
            <Text style={styles.btnDark}>{'Back to Sign in'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RecoverPasswordConfirmScreen