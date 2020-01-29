import React from 'react';

import {
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
    backgroundColor: '#666'
  },

  contentContainer: {
    flex: 6,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 10
  },

  passwordContainer:{
    marginTop: 10
  },

  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#fff",
    alignSelf: "flex-end",
  },

  dateInput: {
    flex: 1,
    alignSelf: "flex-end"
  },

  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10
  },

  btnContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
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

  textLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
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


class ProfileEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      password: '',
      confirm_password: '',
      fullname: "John Smith",
      email: "john.smith@gmail.com",
      birthday: new Date("3/7/1980"),
      location: "Tucson, AZ"
    };
  }

  static navigationOptions = {
    title: 'Edit My Account',
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
    const { isFocused,password,confirm_password, fullname, email, birthday, location } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (
      <View style={styles.baseContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name:</Text>
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
            <Text style={styles.inputLabel}>Email Address:</Text>
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
            <Text style={styles.inputLabel}>Birthdate:</Text>

            <DatePicker
              style={styles.dateInput}
              textColor="#ffffff"
              height={50}
              mode="date"
              date={this.state.birthday}
              onDateChange={date => this.setState({ birthday: date })} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Location:</Text>
            <TextInput
                value={location}
                style={styles.textInput}
                selectionColor="#428AF8"
                underlineColorAndroid={ isFocused? "#428AF8" : "#D3D3D3" }
                onChangeText={(text) => this.setState({location: text})}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
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
          <TouchableOpacity style={styles.buttonLight} onPress={() => this._navTo('Profile')}>
            <Text style={styles.btnLight}>{'Cancel'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDark} onPress={() => this._navTo('Profile')}>
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