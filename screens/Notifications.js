import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';


class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#666'
      }}>
        <Image
          style={{
            marginTop: 5,
            alignItems: "center",
            height: 60
          }}
          source={require('../assets/images/poppit-logo.png')}
          resizeMode='contain' />
        <View style={{
          marginLeft: 20,
        }}>
        <Text style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
        }}>Notifications</Text>
        </View>
        <Image
          style={{
            marginTop: 20,
          }}
          source={require('../assets/wireframes/notifications_screen.png')}
          resizeMode='contain' 
          />
      </View>
    );
  }
}

export default NotificationsScreen