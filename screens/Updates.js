import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1
  }

});

class UpdatesScreen extends React.Component {
  static navigationOptions = {
    title: 'Updates'
  };

  render() {
    return (
      <View style={styles.baseContainer}>
          <WebView source={{uri: 'http://poppit.bchambers.io/updates.html'}} />
      </View>
    );
  }
}

export default UpdatesScreen
