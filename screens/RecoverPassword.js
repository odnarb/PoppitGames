import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
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

  textInput: {
    fontSize: 18,
    marginTop: 6,
    width: "100%"
  },

  buttonLight: {
    width: "100%",
    height: 64,
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
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

  btnLight: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

});

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
              resizeMode="contain"
          ></Image>
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
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('Home')}>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.btnDark}>{'Reset Password'.toUpperCase()}</Text>
              <Icon
                name='chevron-right'
                type='material-community'
                size={32}
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