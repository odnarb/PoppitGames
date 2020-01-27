import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  navContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  navDotGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot2: {
    marginLeft: 5,
    marginRight: 5
  },
  navSkip: {
    color: '#777',
    padding: 10,
    fontSize: 18,
    marginRight: 20
  },
  navNext: {
    padding: 10,
    fontSize: 18,
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBtnGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center"
  },
  highLightBtn: {
    alignSelf: 'stretch'
  }
});

class LearnMoreNav extends React.Component {

    render() {
        const { navToFn, nextNavText, slideNum} = this.props;
        const darkColor = "#000";
        const lightColor = "#dcdc";

        const navDotSize = 32;
        const navDotIcon = 'circle-small';
        const iconColor = darkColor;

        const iconSize = 32;

        let nav1Color = darkColor;
        let nav2Color = lightColor;
        let nav3Color = lightColor;

        if(slideNum && slideNum == 2){
            nav1Color = lightColor;
            nav2Color = darkColor;
            nav3Color = lightColor;
        } else if(slideNum && slideNum == 3){
            nav1Color = lightColor;
            nav2Color = lightColor;
            nav3Color = darkColor;
        }

        return (
        <View style={styles.navContainer}>

          <View style={styles.navDotGroup}>
            <Icon name={navDotIcon} type='material-community' color={nav1Color} size={navDotSize} />
            <Icon style={styles.dot2} name={navDotIcon} type='material-community' color={nav2Color} size={navDotSize} />
            <Icon name={navDotIcon} type='material-community' color={nav3Color} size={navDotSize} />
          </View>

          <View style={styles.navBtnGroup}>
            <TouchableHighlight style={styles.highLightBtn} onPress={() => this._navTo('Home')}>
              <View style={styles.navBtn}>
                <Text style={styles.navSkip}>Skip</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.highLightBtn} onPress={navToFn}>
              <View style={styles.navBtn}>
                <Text style={styles.navNext}>{nextNavText}</Text>
                <Icon
                  name='chevron-right'
                  type='material-community'
                  color={iconColor}
                  size={iconSize} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        );
    }
    _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
    };
}

export default withNavigation(LearnMoreNav);