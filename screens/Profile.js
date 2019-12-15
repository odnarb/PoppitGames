import React from 'react';

import {
  View,
  Text
} from 'react-native';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };

  render() {
    return (
      <View>
        <Text>This is the PROFILE screen..</Text>
      </View>
    );
  }
}

export default ProfileScreen