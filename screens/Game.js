import React from 'react';

import { WebView } from 'react-native-webview';

class GameScreen extends React.Component {
  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

//send this screen company_id, campaign_id and coupon id
//coupon id has the campaign information regarding branding

//get QuickTrip brand
//get Subway Brand
//get Pepsi Brand
//get Coca-Cola brand

  marker = this.props.navigation.getParam('current_marker');
  user_id = this.props.navigation.getParam('user_id');
  company_id = this.props.navigation.getParam('company_id');

  _onMessage = (e) => {
    let activityData = {};
    try {
      activityData = JSON.parse(e.nativeEvent.data);
    } catch(e) {
      //could not save callback data for campaign activity
    }

    activityData.user_id = this.user_id;
    activityData.company_id = this.company_id;

    console.log("--GOT MESSAGE FROM CAMPAIGN ACTIVITY: ", activityData);

    this.props.navigation.navigate('Maps', activityData);
  }

  render() {
    let queryString = '?company_id=' + this.marker.company_id + '&campaign_id=' + this.marker.campaign_id;
    return (
      <WebView
        onMessage={(e) => {this._onMessage(e)}}
        source={{uri: this.marker.content_url + queryString }} />
    );
  }
}

export default GameScreen;