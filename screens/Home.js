import React from 'react';

import {
  AsyncStorage,
  Text,
  View,
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to PoppitGames!',
  };

  render() {
    return (
      <View>
        <Text style={{ padding: 20 }}>Click around to check the static layouts (much like static HTML)</Text>

        <Button title="Play Penalty Kicks!" onPress={() => this._navTo('Game')} />
        <Button title="Map Screen" onPress={() => this._navTo('Maps')} />

        <Button title="Prizes Screen" onPress={() => this._navTo('Prizes')} />

        <Button title="Profile Screen" onPress={() => this._navTo('Profile')} />
        <Button title="Profile Edit Screen" onPress={() => this._navTo('ProfileEdit')} />
        <Button title="Settings Screen" onPress={() => this._navTo('Settings')} />
        <Button title="Notifications Screen" onPress={() => this._navTo('Notifications')} />
        <Button title="Learn More Screen" onPress={() => this._navTo('LearnMore')} />
        <Button title="Email SignUp Screen" onPress={() => this._navTo('EmailSignUp')} />
        <Button title="Email Sign In Screen" onPress={() => this._navTo('EmailSignIn')} />
        <Button title="Email Sign In Error Screen" onPress={() => this._navTo('EmailSignInError')} />
        <Button title="Recover Password Screen" onPress={() => this._navTo('RecoverPassword')} />
        <Button title="Recover Password Confirm Screen" onPress={() => this._navTo('RecoverPasswordConfirm')} />

        <Button title="Sign Out" onPress={this._signOutAsync} />
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen