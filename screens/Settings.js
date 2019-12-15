import React from 'react';

import {
  View,
  Text
} from 'react-native';


class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings Screen',
  };

  render() {
    return (
      <View>
        <Text>This is the SETTINGS screen..</Text>
      </View>
    );
  }
}

export default SettingsScreen