import React from 'react';

import { BackHandler } from 'react-native';

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

  activityData = {
    campaign_id: this.marker.campaign_id,
    user_id: this.props.navigation.getParam('user_id'),
    company_id: this.props.navigation.getParam('company_id'),
    score: 0,
    level: 1,
    completed: false,
    result: false
  };

  //handle messages from activity
  _onMessage = (e) => {
    //disable the back button?
    BackHandler.removeEventListener("hardwareBackPress", this._handleBackButton);

    let data = {};
    try {
      data = JSON.parse(e.nativeEvent.data);
    } catch(e) {
      //could not save callback data for campaign activity
    }

    console.log("_onMessage() :: GOT MESSAGE FROM CAMPAIGN ACTIVITY: ", data);

    //merge the data from the activity into our default
    let res = Object.assign({}, this.activityData, data);

    res.completed = true;
    res.result = false;

    //did user "win"?
    if(data.score >= this.marker.required_score){
      //win!
      res.result = true;
    }

    console.log("_onMessage() :: before navigate : ", res);

    this.props.navigation.navigate('Maps', { activity_data: res });
  }

  _handleBackButton = () => {
    console.log("_handleBackButton() FIRED", this.activityData);

    this.props.navigation.navigate('Maps', { activity_data: this.activityData });

    return true;
  };

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this._handleBackButton);
  }

  render() {
    let queryString = '?v=321&company_id=' + this.marker.company_id + '&campaign_id=' + this.marker.campaign_id;
    return (
      <WebView
        onMessage={(e) => {this._onMessage(e)}}
        source={{uri: this.marker.content_url + queryString }} />
    );
  }
}

export default GameScreen;