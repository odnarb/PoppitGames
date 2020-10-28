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

class PrivacyScreen extends React.Component {
  static navigationOptions = {
    title: 'Privacy Policy',
  };

  render() {
    return (
     <View style={styles.baseContainer}>
          <WebView source={{uri: 'http://poppitgames.mynetgear.com/privacy-policy.html'}} />
      </View>
    );
  }
}

export default PrivacyScreen
