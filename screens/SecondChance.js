import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { profileStyleSheet as styles } from '../components/globalstyles';

class SecondChanceScreen extends React.Component {
  static navigationOptions = {
    title: '2nd Chance',
  };

  render() {
    return (
      <View style={styles.baseContainer}>
          <View style={styles.contentContainer}>



          </View>
      </View>
    );
  }
}

export default SecondChanceScreen
