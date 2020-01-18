import React from 'react';

import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

class LearnMoreScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
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
              marginLeft: 15,
              paddingRight: 15
          }}>
            <Text style={{
                marginTop: 22,
                fontSize: 32,
                fontWeight: 'bold',
                color: '#000'
            }}>Poppit Tutorial Slide 3</Text>

            <Text style={{
                marginTop: 22,
                fontSize: 17,
                color: '#555'
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>

        <View style={{
          flex: 6,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20
        }}>
          <Image
            style={{
              flex: 1,
              alignItems: "center",
              height: undefined,
              width: undefined
            }}
            source={require('../assets/wireframes/tutorial_image_placeholder.png')}
            resizeMode='contain' />
        </View>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 20
        }}>

          <Text style={{
              fontSize: 18,
              marginTop: 3,
              marginRight: 20
            }}>Finish</Text>

          <TouchableHighlight onPress={() => this._navTo('Home')}>
            <Icon
              name='arrow-right'
              type='material-community'
              size={28} />
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

export default LearnMoreScreen