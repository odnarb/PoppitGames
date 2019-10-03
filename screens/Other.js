import React from 'react';

import {
  View,
  Text
} from 'react-native';


class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Screen',
  };

  render() {
    return (
      <View>
        <Text>This is the OTHER screen..</Text>
      </View>
    );
  }
}

export default OtherScreen