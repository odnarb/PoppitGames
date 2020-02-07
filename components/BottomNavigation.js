import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

import {
  bottomNavStyleSheet as styles,
  bottomNavIconSize as iconSize,
  bottomNavIconColor as iconColor
} from '../components/globalstyles';

class BottomNavigation extends React.Component {

    render() {
        return (
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => this._navTo('Prizes')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name="trophy"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Prizes</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._navTo('Maps')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name="magnify"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Search</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._navTo('Settings')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name="settings"
                type="material-community"
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Settings</Text>
                </View>
            </TouchableOpacity>
          </View>
        );
    }

    _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
  };
}

export default withNavigation(BottomNavigation);