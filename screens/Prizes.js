import React from 'react';

import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';

import LogoBanner from '../components/LogoBanner';

import BottomNavigation from '../components/BottomNavigation';

import { prizesStyleSheet as styles } from '../components/globalstyles';

import { prizes as FAKE_PRIZES } from '../components/FakePrizes';

class PrizesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prizes: []
    };
  }

  static navigationOptions = {
    //in newer versions this is the correct way to hide the title
    // headerShown: false
    header: null
  };

/*
              <View style={[styles.flatLightGreyBG,styles.prizeContainer]}>
                <View style={styles.prizeCell}>
                  <Text style={[styles.white,styles.prizeText]}>FREE{'\n'}2 Liter Pepsi</Text>
                </View>

                <View style={styles.prizeCell}>
                  <Text style={[styles.white,styles.prizeText]}>Hooters{'\n'}Scottsdale</Text>
                </View>

                <View style={styles.prizeCell}>
                  <Text style={[styles.white,styles.prizeText]}>CLAIMED</Text>
                </View>
              </View>
*/

  _renderPrizes = () => {
    if( this.state.prizes.length == 0 ){
      //show a loading spinner animation
      return (<ActivityIndicator size="large" />);
    }
    return ( this.state.prizes.map( (prize, index) => {
      return (
        <View style={[styles.greenBG,styles.prizeContainer]} key={index}>
          <View style={styles.prizeCell}>
            <Text style={[styles.grey,styles.prizeText]}>-25% OFF{'\n'}2 Liter Pepsi</Text>
          </View>

          <View style={styles.prizeCell}>
            <Text style={[styles.grey,styles.prizeText]}>Hooters{'\n'}Scottsdale</Text>
          </View>

          <View style={styles.prizeCell}>
            <Text style={[styles.grey,styles.prizeText]}>CLAIM</Text>
          </View>
        </View>
      )
    }));
  };

  componentDidMount() {
    //call to get the prizes from the server
    setTimeout(() => {
      this.setState({
        prizes: FAKE_PRIZES
      });
    }, 1500 );
  }

  render() {
    return (

      <View style={styles.baseContainer}>
          <LogoBanner container="flex1" size="small" />

          <View style={styles.contentContainer}>

            <Text style={[styles.grey,styles.padLeft20,styles.textHeader]}>My Prizes</Text>

            <ScrollView style={{}}>
              {this._renderPrizes()}
            </ScrollView>
          </View>
          <BottomNavigation />
      </View>
    );

  }
}

export default PrizesScreen
