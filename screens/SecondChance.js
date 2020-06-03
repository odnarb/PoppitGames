import React from 'react';

import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid
} from 'react-native';

import BottomNavigation from '../components/BottomNavigation';

import Contacts from 'react-native-contacts';

import { Icon } from 'react-native-elements';

import {
  contactStyleSheet as styles,
  whiteColor,
  greyColor
} from '../components/globalstyles';

class SecondChanceScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectAll: false,
      checkedNames: {},
      refreshing: false,
      contact_type: 'sms',
      contacts_fetched: false,
      contacts: []
    };
  };

  static navigationOptions = {
    title: '2nd Chance'
  };

  _fetchData = (contact_type) => {
    if (contact_type == 'fb') {
      this.setState({
        checkedNames: {},
        refreshing: false,
        contacts: [],
        contacts_fetched: true
      });
    } else if (contact_type == 'twitter') {
      this.setState({
        checkedNames: {},
        refreshing: false,
        contacts: [],
        contacts_fetched: true
      });
    } else if (contact_type == 'sms') {
      // if(this.state.contacts_fetched == false){
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          // {
          //   'title': 'Second Chance: Address book permissions',
          //   'message': 'In order to get a second chance for coupons please enable your address book.',
          //   'buttonPositive': 'OK'
          // }
        ).then(() => {
          Contacts.getAll((err, contacts) => {
            if (err === 'denied'){
              // error
              console.log("---SECONDCHANCE: Contacts list access DENIED");
            } else {
              // contacts returned in Array
              // console.log("---SECONDCHANCE: Contacts list access GRANTED");
              // console.log("---SECONDCHANCE: Contacts:", contacts);
              this.setState({
                checkedNames: {},
                refreshing: false,
                contacts: contacts,
                contacts_fetched: true
              });
            }
          })
        });
      // } //endif
    } else if (contact_type == 'email') {
      this.setState({
        checkedNames: {},
        refreshing: false,
        contacts: [],
        contacts_fetched: true
      });
    }
  };

  _onPressContact = (index) => {
    let thisContactName = this.state.contacts[index].displayName;
    let checkedNames = this.state.checkedNames;
    if ( !checkedNames[ thisContactName ]){
      checkedNames[ thisContactName ] = 1;
    } else if ( checkedNames[ thisContactName ] == 1 ){
      checkedNames[ thisContactName ] = 0;
    } else if ( checkedNames[ thisContactName ] == 0 ){
      checkedNames[ thisContactName ] = 1;
    }

    let selectAll = true;
    let keys = Object.keys( checkedNames );
    for(let i=0; i < Object.keys( checkedNames ).length;i++){
      if( checkedNames[ keys[i] ] == 0 ) {
        selectAll = false;
      }
    }

    this.setState({
      selectAll: selectAll,
      checkedNames: checkedNames
    });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this._fetchData(this.state.contact_type);
  };

  _renderContacts = () => {
    if( this.state.contacts_fetched == false ){
      //show a loading spinner animation
      return (<ActivityIndicator size="large" />);
    }
    return (this.state.contacts.map( (contact, index) => {
      let iconName = 'account-check-outline';

      if( this.state.checkedNames[ contact.displayName ] == 1) {
        iconName = 'account-check';
      }
      return (
        <TouchableOpacity style={styles.contactLineBtn} key={index} onPress={() => this._onPressContact(index)}>
          <Text style={styles.contactText}>{contact.displayName}</Text>
          <Icon
            style={styles.icon}
            name={iconName}
            type='material-community'
            color={greyColor}
            size={40} />
        </TouchableOpacity>
    )}));
  };

  _onPressContactType = (contact_type) => {
    this.setState({
      refreshing: true,
      contact_type: contact_type,
    });

    this._fetchData(contact_type);
  };

  _onPressSelectAll = () => {
    let checkedNames = this.state.checkedNames;

    this.state.contacts.map( (contact, index) => {
      if( this.state.selectAll ) {
        checkedNames[ contact.displayName ] = 0;
      } else {
        checkedNames[ contact.displayName ] = 1;
      }
      return;
    });

    this.setState({
      checkedNames: checkedNames,
      selectAll: !this.state.selectAll
    });
  }

  componentDidMount() {
    //call to get the prizes from the server
    this.setState({
      refreshing: true,
      contact_type: 'sms',
    });

    this._fetchData('sms');
  }

  render() {

    let messengerStyles = [styles.contactCell,styles.contactCellBorder];
    let twitterStyles   = [styles.contactCell,styles.contactCellBorder];
    let smsStyles       = [styles.contactCell,styles.contactCellBorder];
    let emailStyles     = [styles.contactCell];

    let messengerIconColor = greyColor;
    let twitterIconColor   = greyColor;
    let smsIconColor       = greyColor;
    let emailIconColor     = greyColor;

    if (this.state.contact_type == 'fb') {
      messengerStyles.push(styles.contactTypeSelected);
      messengerIconColor = whiteColor;
    } else if (this.state.contact_type == 'twitter') {
      twitterStyles.push(styles.contactTypeSelected);
      twitterIconColor = whiteColor;
    } else if (this.state.contact_type == 'sms') {
      smsStyles.push(styles.contactTypeSelected);
      smsIconColor = whiteColor;
    } else if (this.state.contact_type == 'email') {
      emailStyles.push(styles.contactTypeSelected);
      emailIconColor = whiteColor;
    }

    let selectAllText = "Select";
    if( this.state.selectAll == true ){
      selectAllText = "Deselect";
    }

    return (
      <View style={styles.baseContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={[styles.grey,styles.padLeft20,styles.textHeader]}>Choose contacts to invite</Text>
              <Text style={[styles.grey,styles.padLeft20]}>In order to get a second chance for winning coupons, please enable your address book.</Text>
            </View>

            <View style={styles.contactButtonsContainer}>
              <View style={messengerStyles}>
                <TouchableOpacity style={styles.contactBtnWrapper} onPress={() => this._onPressContactType('fb')}>
                  <View style={styles.contactBtn}>
                    <Icon
                      style={styles.icon}
                      name='facebook-messenger'
                      type='material-community'
                      color={messengerIconColor}
                      size={32} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={twitterStyles}>
                <TouchableOpacity style={styles.contactBtnWrapper} onPress={() => this._onPressContactType('twitter')}>
                  <View style={styles.contactBtn}>
                  <Icon
                    name='twitter'
                    type='material-community'
                    color={twitterIconColor}
                    size={32} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={smsStyles}>
                <TouchableOpacity style={styles.contactBtnWrapper} onPress={() => this._onPressContactType('sms')}>
                  <View style={styles.contactBtn}>
                    <Icon
                      name='phone'
                      type='material-community'
                      color={smsIconColor}
                      size={32} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={emailStyles}>
                <TouchableOpacity style={styles.contactBtnWrapper} onPress={() => this._onPressContactType('email')}>
                  <View style={styles.contactBtn}>
                    <Icon
                      name='email'
                      type='material-community'
                      color={emailIconColor}
                      size={32} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.numberCell, styles.selectLine]}>
              <Text style={[styles.padLeft20,styles.numberText]}>{this.state.contacts.length} friends with {this.state.contact_type}</Text>
              <Text style={styles.selectText} onPress={() => this._onPressSelectAll()}>{selectAllText} all</Text>
            </View>

            <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
            style={[styles.contactsContainer]}>
              {this._renderContacts()}
            </ScrollView>

            <View style={styles.contactBotButtonContainer}>
              <TouchableOpacity style={[styles.contactBtnWrapper, styles.greyBG]}>
                <View style={styles.contactBtn}>
                  <Text style={styles.btnText}>{'Send Invites'.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

export default SecondChanceScreen
