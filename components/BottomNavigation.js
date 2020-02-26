import React from 'react';

import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

import {
  bottomNavStyleSheet as styles,
  bottomNavIconSize as iconSize,
  bottomNavIconColor as iconColor,
  lightblueColor,
  lightGreyColor
} from '../components/globalstyles';

class BottomNavigation extends React.Component {

    render() {
        let textStyles = [styles.lightblue,styles.navText];
        let navBtnStyles = [styles.greyBG,styles.navBtn];
        let iconColor = lightblueColor;
        return (
        <View style={styles.navOuterContainer}>
          <View style={styles.navContainer}>
            <TouchableHighlight underlayColor={lightGreyColor} onPress={() => this._navTo('Prizes')} style={navBtnStyles}>
              <View style={styles.navBtnView}>
              <Icon
                name="trophy"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={textStyles}>Prizes</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={lightGreyColor} onPress={() => this._navTo('Maps')} style={navBtnStyles}>
              <View style={styles.navBtnView}>
              <Icon
                name="magnify"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={textStyles}>Search</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={lightGreyColor} onPress={() => this._navTo('Settings')} style={navBtnStyles}>
              <View style={styles.navBtnView}>
              <Icon
                name="settings"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={textStyles}>Settings</Text>
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

export default withNavigation(BottomNavigation);