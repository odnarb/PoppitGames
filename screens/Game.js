import React from 'react';

import { WebView } from 'react-native-webview';

class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Penalty Kicks',
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