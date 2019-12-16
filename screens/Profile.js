import React from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#666',
      }}>
          <View style={{
            flex: 1,
            paddingTop: 10
          }}>
            <Image
              style={{
                alignItems: "center",
                height: 60
              }}
              source={require('../assets/images/poppit-logo.png')}
              resizeMode='contain' />
          </View>


          <View style={{
            flex: 6,
          }}>
            <Text style={{
                paddingLeft: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff'
            }}>Profile</Text>
            <Image
              style={{
                marginTop: 20,
              }}
              source={require('../assets/wireframes/profile_screen.png')}
            />
          </View>


        <View style={{
          flex: 1
        }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}>
              <Image style={{ flex: 1 }} source={require('../assets/wireframes/button_profile.png')} />
              <Image style={{ flex: 1 }} source={require('../assets/wireframes/button_search.png')} />
              <Image style={{ flex: 1 }} source={require('../assets/wireframes/button_settings.png')} />
            </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen