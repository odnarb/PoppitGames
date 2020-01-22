import React from 'react';

import { WebView } from 'react-native-webview';

class GameScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  render() {
    return (
      <WebView
        source={{uri: 'http://bchambers.io/games/penalty-kicks/index.html'}}
      />
    );
  }
}

export default GameScreen;