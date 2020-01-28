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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
  },
  navBtn: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff'
  },

  navBtnView: {
        alignItems: "center",
        justifyContent: "center"
  },

  navText: {
    fontSize: 16,
    color: "#777",
  }
});

class BottomNavigation extends React.Component {

    render() {
        const iconSet = "material-community";
        const iconSize = 54;
        const iconColor = "#777";

        const prizeIcon = "trophy";
        const searchIcon = "magnify";
        const settingsIcon = "settings";

        return (
          <View style={styles.navContainer}>
            <TouchableHighlight onPress={() => this._navTo('Prizes')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name={prizeIcon}
                type={iconSet}
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Prizes</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this._navTo('Maps')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name={searchIcon}
                type={iconSet}
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Search</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this._navTo('Settings')} style={styles.navBtn}>
              <View style={styles.navBtnView}>
              <Icon
                name={settingsIcon}
                type={iconSet}
                size={iconSize}
                color={iconColor} />
                <Text style={styles.navText}>Settings</Text>
                </View>
            </TouchableHighlight>
          </View>
        );
    }

    _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
  };
}

export default withNavigation(BottomNavigation);