import React from 'react';

import { BackHandler } from 'react-native';

import { WebView } from 'react-native-webview';

import { MARKER_STATES, MARKER_STATE_DETAIL } from '../components/globalconstants';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.marker = this.props.navigation.getParam('current_marker');

    this.state = {
      campaign_id: this.marker.campaign_id,
      activity_state: MARKER_STATES.none,
      activity_state_detail: MARKER_STATE_DETAIL.none,
      score: 0,
      sessions: 1
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
  _updateFate(cb){

    let thisState = MARKER_STATES.none;
    let thisStateDetail = MARKER_STATE_DETAIL.none;

    switch(this.marker.type){
      case "game":
        if( this.state.score >= this.marker.options.bonus_score ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.win_bonus_score;
        } else if( this.state.score >= this.marker.options.perfect_score ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.win_perfect_score;
        } else if( this.state.score >= this.marker.options.set_score ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.win_set_score;
        } else if ( this.state.tries < this.marker.options.min_tries && this.state.sessions == 1 ){
          //no change to state
        } else if ( this.state.quit && this.state.tries >= this.marker.options.min_tries ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.lose;
        } else if ( this.state.quit && this.state.sessions > 1 ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.lose;
        } else if ( this.state.tries && this.state.sessions > 1 ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.lose;
        } else if ( this.state.score < this.marker.options.required_score ){
          thisState = MARKER_STATES.completed;
          thisStateDetail = MARKER_STATE_DETAIL.lose;
        }
        break;
      case "raffle":
        if( this.state.completed == true ){
          thisState = MARKER_STATES.completed;
        }
        break;
      case "survey":
        if(  this.state.completed == true ){
          thisState = MARKER_STATES.completed;
        }
        break;
      default:
        //no change to state
    } //end switch

    this.setState({
        activity_state: thisState,
        activity_state_detail: thisStateDetail
    }, () => {
      if( cb ){ cb(); }
    });
  }

  _onEndActivity = (data) => {
    console.log("_onEndActivity() :: end with DATA: ", data);
    console.log("_onEndActivity() :: current STATE (before update): ", this.state );

    //this might be a bit of a waste of a cycle.. but update the state and then go back
    this.setState(data, () => {
      this._updateFate(() => {
        this._goBack();
      });
    });
  }

  _onUpdateActivity = (data) => {
    console.log("_onUpdateActivity() :: got update: ", data);
    console.log("_onUpdateActivity() :: current STATE (before update): ", this.state );

    this.setState(data, () => {
      this._updateFate();
    });
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

    console.log("_goBack() :: Before navigating to MAPS", this.state);

    this.props.navigation.navigate('Maps', { activity_data: this.state });

    return true;
  };

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this._goBack);
  }

  render() {
    let queryString = '?v=791';

    if( this.marker.type == "game" ) {
        queryString += '&company_id=' + this.marker.company_id
        + '&campaign_id=' + this.marker.campaign_id
        + '&branding=' + this.marker.options.branding
        + '&perfect_score=' + this.marker.options.perfect_score
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
