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
    state: "none"
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

    res.state = "none";

/*
       let endObj = {
            quit: quitting,
            score: parseInt(_iScore),
            sessions: _iSessions,
            tries: _iLaunch,
            level: _iLevel
        };
*/

    switch(this.marker.type){
      case "game":
        if( res.score >= this.marker.options.required_score){
          res.state = "win";
        } else if ( res.tries < this.marker.options.min_tries ){
          res.state = "none";
        } else if ( res.quit ) {
          res.state = "lose";
        }
      case "raffle":
        if( res.completed ){
          res.state = "entered";
        }
      case "survey":
        if( res.completed ){
          res.state = "completed";
        }
      default:
        res.state = "none";
    }

    console.log("_onMessage() :: before navigate : ", res);

    this.props.navigation.navigate('Maps', { activity_data: res });
  }

  _handleBackButton = () => {
    console.log("_handleBackButton() FIRED", this.activityData);
    BackHandler.removeEventListener("hardwareBackPress", this._handleBackButton);

    this.props.navigation.navigate('Maps', { activity_data: this.activityData });

    return true;
  };

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this._handleBackButton);
  }

  render() {
    let queryString = '?v=787'
        + '&company_id=' + this.marker.company_id
        + '&campaign_id=' + this.marker.campaign_id
        + '&required_score=' + this.marker.options.required_score
        + '&min_tries=' + this.marker.options.min_tries
        + '&max_tries=' + this.marker.options.max_tries
        + '&max_sessions=' + this.marker.options.max_sessions;
    return (
      <WebView
        onMessage={(e) => {this._onMessage(e)}}
        source={{uri: this.marker.options.content_url + queryString }} />
    );
  }
}

export default GameScreen;