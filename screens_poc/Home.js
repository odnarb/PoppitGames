import React from 'react';

import {
  AsyncStorage,
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
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Play Penalty Kicks!" onPress={this._playPenaltyKicksAsync} />
        <Button title="Map of Participating Stores" onPress={this._loadMapsAsync} />
        <Button title="Sign Out" onPress={this._signOutAsync} />
      </View>
    );
  }

  _loadMapsAsync = () => {
    this.props.navigation.navigate('Maps');
  };

  _playPenaltyKicksAsync = () => {
    this.props.navigation.navigate('PenaltyKicksGame');
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('LocationFullView');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen