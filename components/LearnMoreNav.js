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
    justifyContent: 'flex-end',
    // backgroundColor: "red"
    marginBottom: 20
  },
  navSkip: {
    color: '#777',
    marginTop: 3,
    fontSize: 18,
    marginRight: 20
  },
  navNext: {
    fontSize: 18,
    marginTop: 3,
    marginRight: 20
  },
  navBtn: {
    flexDirection: 'row',
  }
});

class LearnMoreNav extends React.Component {

    render() {
        const { navToFn, nextNavText} = this.props;

        const iconSet = "material-community";
        const iconColor = "#000";
        const iconSize = 32;


        return (
        <View style={styles.navContainer}>
          <TouchableHighlight onPress={() => this._navTo('Home')}>
            <Text style={styles.navSkip}>Skip</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={navToFn}>
            <View style={styles.navBtn}>
              <Text style={styles.navNext}>{nextNavText}</Text>
              <Icon
                name='chevron-right'
                type={iconSet}
                color={iconColor}
                size={iconSize} />
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

export default withNavigation(LearnMoreNav);