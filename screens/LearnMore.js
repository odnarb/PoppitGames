import React from 'react';

import {
  View,
  Text
} from 'react-native';


class LearnMoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Learn More Screen',
  };

  render() {
    return (
      <View>
        <Text>This is the LearnMore screen..</Text>
      </View>
    );
  }
}

export default LearnMoreScreen