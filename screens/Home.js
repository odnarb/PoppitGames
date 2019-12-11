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
        <Button title="Sign Out" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen