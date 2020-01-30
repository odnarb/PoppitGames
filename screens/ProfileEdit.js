import React from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import PasswordInputText from '../components/PasswordInputText';
import DatePicker from 'react-native-date-picker'

import { profileEditStyleSheet as styles } from '../components/globalstyles';

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