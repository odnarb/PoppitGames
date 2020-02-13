import React from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BCPasswordInputText from '../components/BCPasswordInputText';
import DatePicker from 'react-native-date-picker'

import {
  profileEditStyleSheet as styles,
  birthdayInputSize,
  greyColor
} from '../components/globalstyles';

class ProfileEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameFocused: false,
      isEmailFocused: false,
      isLocationFocused: false,
      isPassword1Focused: false,
      isPassword2Focused: false,
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

  handleFocus = (key, event) => {
      this.setState({ [key]: true });
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
  };

  handleBlur = (key, event) => {
      this.setState({ [key]: false });
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
  };

  render() {
    const {
      isNameFocused,
      isEmailFocused,
      isLocationFocused,
      isPassword1Focused,
      isPassword2Focused,
      password,
      confirm_password,
      fullname,
      email,
      birthday,
      location
  } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (
      <View style={styles.baseContainer}>
        <View style={styles.contentContainer}>

          <View style={styles.inputContainer}>
            <View>
              <Text style={[styles.grey,styles.inputLabel]}>{'Full Name:'.toUpperCase()}</Text>
            </View>
            <View>
              <TextInput
                  value={fullname}
                  style={[styles.grey,styles.textInput]}
                  selectionColor="#428AF8"
                  underlineColorAndroid={ isNameFocused? "#428AF8" : "#D3D3D3" }
                  onChangeText={(text) => this.setState({fullname: text})}
                  onFocus={(e) => {this.handleFocus(e, 'isNameFocused')}}
                  onBlur={(e) => {this.handleBlur(e, 'isNameFocused')}} />
            </View>
          </View>


          <View style={styles.inputContainer}>
            <View>
              <Text style={[styles.grey,styles.inputLabel]}>{'Email Address:'.toUpperCase()}</Text>
            </View>

            <View>
              <TextInput
                  value={email}
                  keyboardType='email-address'
                  style={[styles.grey,styles.textInput]}
                  selectionColor="#428AF8"
                  underlineColorAndroid={ isEmailFocused? "#428AF8" : "#D3D3D3" }
                  onChangeText={(text) => this.setState({email: text})}
                  onFocus={(e) => {this.handleFocus(e, 'isEmailFocused')}}
                  onBlur={(e) => {this.handleBlur(e, 'isEmailFocused')}} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <Text style={[styles.grey,styles.inputLabel]}>{'Birthdate:'.toUpperCase()}</Text>
            </View>
            <View>
              <DatePicker
                style={styles.dateInput}
                textColor={greyColor}
                mode="date"
                height={50}
                date={this.state.birthday}
                onDateChange={date => this.setState({ birthday: date })} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <Text style={[styles.grey,styles.inputLabel]}>{'Location:'.toUpperCase()}</Text>
            </View>
            <View>
              <TextInput
                  value={location}
                  style={[styles.grey,styles.textInput]}
                  selectionColor="#428AF8"
                  underlineColorAndroid={ isLocationFocused? "#428AF8" : "#D3D3D3" }
                  onChangeText={(text) => this.setState({location: text})}
                  onFocus={(e) => {this.handleFocus(e, 'isLocationFocused')}}
                  onBlur={(e) => {this.handleBlur(e, 'isLocationFocused')}} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <BCPasswordInputText
                placeholder="Password"
                style={[styles.grey,styles.textInput]}
                selectionColor="#428AF8"
                underlineColorAndroid={ isPassword1Focused? "#428AF8" : "#D3D3D3" }
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
                onFocus={(e) => {this.handleFocus(e, 'isPassword1Focused')}}
                  onBlur={(e) => {this.handleBlur(e, 'isPassword1Focused')}} />
          </View>
          <View style={styles.inputContainer}>
            <BCPasswordInputText
                placeholder="Confirm Password"
                style={[styles.grey,styles.textInput]}
                selectionColor="#428AF8"
                underlineColorAndroid={ isPassword2Focused? "#428AF8" : "#D3D3D3" }
                value={confirm_password}
                onChangeText={(text) => this.setState({ confirm_password: text })}
                onFocus={(e) => {this.handleFocus(e, 'isPassword2Focused')}}
                  onBlur={(e) => {this.handleBlur(e, 'isPassword2Focused')}} />
          </View>
        </View>

        <View style={styles.btnContainer}>
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