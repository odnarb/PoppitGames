import React from 'react';

import {
  Image,
  Text,
  TouchableHighlight,
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
            <Text style={{
                paddingLeft: 10,
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff'
            }}>My Profile</Text>

            <View style={{
              flexDirection: 'row',
              paddingLeft: 10,
              marginTop: 20,
             }}>
              <Image source={require('../assets/wireframes/profile_placeholder.png')} />
              <Text style={{
                  paddingLeft: 20,
                  fontSize: 20,
                  color: '#fff'
              }}>John Smith{'\n'} <Text style={{ fontSize: 16 }}>john.smith@gmail.com</Text></Text>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingLeft: 10,
              marginTop: 20,
             }}>

              <Image source={require('../assets/wireframes/icon_placeholder.png')} />
              <Text style={{
                  marginTop: 5,
                  paddingLeft: 12,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff'
              }}>My Prizes</Text>

            </View>

            <View style={{
              flexDirection: 'row',
              paddingLeft: 12,
              marginTop: 20,
             }}>

              <Image source={require('../assets/wireframes/icon_placeholder.png')} />
              <Text style={{
                  marginTop: 5,
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff'
              }}>Logout</Text>
            </View>
          </View>

        <View style={{
              flex: 1.25,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}>
           <TouchableHighlight onPress={() => this._navTo('Profile')} style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_profile.png')} resizeMode="contain" />
            </TouchableHighlight>

           <TouchableHighlight onPress={() => this._navTo('Maps')} style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_search.png')} resizeMode="contain" />
            </TouchableHighlight>

           <TouchableHighlight onPress={() => this._navTo('Settings')} style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image style={{ flex: 1,height: undefined, width: undefined }} source={require('../assets/wireframes/button_settings.png')} resizeMode="contain" />
            </TouchableHighlight>
        </View>
      </View>
    );
  }

  _navTo = (screen) => {
    console.log("Navigating to :: " + screen);

    this.props.navigation.navigate(screen);
  };
}

export default ProfileScreen