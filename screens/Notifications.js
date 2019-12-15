import React from 'react';

import {
  View,
  Text
} from 'react-native';


class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications Screen',
  };

  render() {
    return (
      <View>
        <Text>This is the NOTIFICATIONS screen..</Text>
      </View>
    );
  }
}

export default NotificationsScreen