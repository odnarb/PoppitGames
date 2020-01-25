import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import PasswordInputText from '../components/PasswordInputText';

import DatePicker from 'react-native-date-picker'

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#666'
  },

  inputGroupContainer: {
    flex: 6
  },

  image: {
    marginTop: 10
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 10
  },

  otherContainer: {
    flexDirection: "column"
  },

  passwordContainer:{
    marginTop: 10
  },

  textInput: {
    fontSize: 18,
    color: "#fff",
    marginLeft: "auto"
  },

  dateInput: {
      marginLeft: "auto"
  },

  inputLabel: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10
  },

  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

  textLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

});


class ProfileEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      password: '',
      confirm_password: '',
      fullname: "John Smith",
      email: "john.smith@gmail.com",
      birthday: new Date("3/7/1980")
    };
  }

  static navigationOptions = {
    title: 'Edit My Profile',
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
    const { isFocused,password,confirm_password, fullname, email, birthday } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (
      <View style={styles.baseContainer}>
        <View style={styles.inputGroupContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
                value={fullname}
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({fullname: text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
                value={email}
                keyboardType='email-address'
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({email: text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Birthdate</Text>

            <DatePicker
              style={styles.dateInput}
              textColor="#ffffff"
              height={50}
              mode="date"
              date={this.state.birthday}
              onDateChange={date => this.setState({ birthday: date })} />
          </View>

          <View style={styles.otherContainer}>
            <Text style={styles.inputLabel}>Profile Image</Text>
            <Image style={styles.image}
              source={require('../assets/wireframes/profile_placeholder.png')} />
          </View>

          <View style={styles.passwordContainer}>
            <PasswordInputText
                label=""
                placeholder="Password"
                textColor="#fff"
                getRef={input => this.input = input}
                value={password}
                iconColor="#ccc"
                onChangeText={(password) => this.setState({ password })} />

            <PasswordInputText
                label=""
                placeholder="Confirm Password"
                textColor="#fff"
                getRef={input => this.input = input}
                value={confirm_password}
                iconColor="#ccc"
                onChangeText={(confirm_password) => this.setState({ confirm_password })} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('Home')}>
            <Text style={styles.btnDark}>{'Save Changes'.toUpperCase()}</Text>
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

export default ProfileEditScreen