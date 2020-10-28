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

class TermsScreen extends React.Component {
  static navigationOptions = {
    title: 'Terms of Use',
  };

  render() {
    return (
      <View style={styles.baseContainer}>
          <WebView source={{uri: 'http://poppitgames.mynetgear.com/terms.html'}} />
      </View>
    );
  }
}

export default TermsScreen
