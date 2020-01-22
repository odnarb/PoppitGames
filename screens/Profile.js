import React from 'react';

import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';

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
            paddingTop: 10
          }}>
            <Image
              style={{
                alignItems: "center",
                height: 50
              }}
              source={require('../assets/images/poppit-logo.png')}
              resizeMode='contain' />
          </View>


          <View style={{
            flex: 6
          }}>

            <View style={{ flexDirection: 'row'}}>
            <Text style={{
                paddingLeft: 10,
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff',
                marginRight: 20
            }}>My Profile
            </Text>

              <Icon
                name='pencil'
                type='material-community'
                size={28}
                color='#777' />
            </View>

            <View style={{
              flexDirection: 'row',
              marginLeft: 20,
              marginTop: 20,
             }}>
              <Image source={require('../assets/wireframes/profile_placeholder.png')} />
              <Text style={{
                  paddingLeft: 20,
                  fontSize: 20,
                  color: '#fff'
              }}>John Smith{'\n'}<Text style={{ fontSize: 16, marginTop: 10 }}>john.smith@gmail.com</Text></Text>
            </View>

          </View>

          <BottomNavigation />

      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default ProfileScreen