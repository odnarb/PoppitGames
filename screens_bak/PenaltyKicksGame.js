import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class PenaltyKicksGame extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://bchambers.io/games/penalty-kicks/index.html'}}
      />
    );
  }
}

export default PenaltyKicksGame;
