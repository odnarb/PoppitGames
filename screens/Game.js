import React from 'react';

import { BackHandler } from 'react-native';

import { WebView } from 'react-native-webview';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.marker = this.props.navigation.getParam('current_marker');

    activityData = {
      campaign_id: this.marker.campaign_id,
      state: "lose"
    };

    this.state = {

    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

  //get QuickTrip brand
  //get Subway Brand
  //get Pepsi Brand
  //get Coca-Cola brand

  _onEndActivity = (data) => {
    //disable the back button listener before anything
    BackHandler.removeEventListener("hardwareBackPress", this._goBack);

    //merge the data from the activity into our default
    let res = data;

    res.state = "none";

    // console.log("_onEndActivity() :: marker: ", this.marker);
    // console.log("_onEndActivity() :: res: ", res);

    switch(this.marker.type){
      case "game":
        if ( res.tries < this.marker.options.min_tries && res.sessions == 1 ){
          res.state = "none";
        } else if ( res.quit && res.tries >= this.marker.options.min_tries ){
          res.state = "lose";
        } else if ( res.quit && res.sessions > 1 ){
          res.state = "lose";
        } else if ( res.score < this.marker.options.required_score ){
          res.state = "lose";
        } else if( res.score >= this.marker.options.required_score ){
          res.state = "win";
        }
        break;
      case "raffle":
        if( res.completed ){
          res.state = "entered";
        }
        break;
      case "survey":
        if( res.completed ){
          res.state = "completed";
        }
        break;
      default:
        res.state = "none";
    } //end switch

    console.log("_onEndActivity() :: before navigate : ", res);

    //this might be a bit of a waste of a cycle.. but update the state and then go back
    this.setState({
      activity_data: { ...this.state.activity_data, ...res}
    }, () => {
      this._goBack();
    });

  }

  _onUpdateActivity = (data) => {
    //TODO: when we get new info
    console.log("_onUpdateActivity() :: got update: ", data);
  }

  //handle messages from activity
  _onMessage = (e) => {
    let data = {};
    try {
      data = JSON.parse(e.nativeEvent.data);

      switch(data.action){
        case "update":
          this._onUpdateActivity(data);
          break;
        case "end":
          this._onEndActivity(data);
          break;
      }
    } catch(e) {
      //could not parse message.. might want to capture this..
    }
  }

  _goBack = () => {
    console.log("_goBack() FIRED");

    BackHandler.removeEventListener("hardwareBackPress", this._goBack);

    console.log("_goBack() :: Before navigating to MAPS", this.state.activity_data);

    this.props.navigation.navigate('Maps', { activity_data: this.state.activity_data });

    return true;
  };

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this._goBack);
  }

  render() {
    let queryString = '?v=789';

    if( this.marker.type == "game" ) {
        queryString += '&company_id=' + this.marker.company_id
        + '&campaign_id=' + this.marker.campaign_id
        + '&required_score=' + this.marker.options.required_score
        + '&min_tries=' + this.marker.options.min_tries
        + '&max_tries=' + this.marker.options.max_tries
        + '&max_sessions=' + this.marker.options.max_sessions;
    } else if( this.marker.type == "survey" ) {
        //todo
    } else if( this.marker.type == "raffle" ) {
        //todo
    }
    return (
      <WebView
        onMessage={(e) => {this._onMessage(e)}}
        source={{uri: this.marker.options.content_url + queryString }} />
    );
  }
}

export default GameScreen;