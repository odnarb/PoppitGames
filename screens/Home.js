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
        <Text>This is just a throw-away screen.. shows links to the other screens for now..</Text>

        <Button title="Play Penalty Kicks!" onPress={() => this._navTo('Game')} />
        <Button title="Map Screen" onPress={() => this._navTo('Maps')} />
        <Button title="Profile Screen" onPress={() => this._navTo('Profile')} />
        <Button title="Settings Screen" onPress={() => this._navTo('Settings')} />
        <Button title="Notifications Screen" onPress={() => this._navTo('Notifications')} />

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