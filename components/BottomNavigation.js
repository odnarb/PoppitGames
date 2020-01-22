import React from 'react';

import {
    Image,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';

class BottomNavigation extends React.Component {

    render() {

        return (
          <View style={styles.navContainer}>
             <TouchableHighlight onPress={() => this._navTo('Profile')} style={styles.navBtn}>
                  <Image style={styles.navImage} source={require('../assets/wireframes/button_profile.png')} resizeMode="contain" />
              </TouchableHighlight>

             <TouchableHighlight onPress={() => this._navTo('Maps')} style={styles.navBtn}>
                  <Image style={styles.navImage} source={require('../assets/wireframes/button_search.png')} resizeMode="contain" />
              </TouchableHighlight>

             <TouchableHighlight onPress={() => this._navTo('Settings')} style={styles.navBtn}>
                  <Image style={styles.navImage} source={require('../assets/wireframes/button_settings.png')} resizeMode="contain" />
              </TouchableHighlight>
          </View>
        );
    }

    _navTo = (screen) => {
        console.log("Navigating to :: " + screen);

        this.props.navigation.navigate(screen);
  };
}


const styles = StyleSheet.create({
    navContainer: {
        flex: 1.25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    navBtn: {
        flex: 1,
        backgroundColor: '#fff'
    },
    navImage: {
        flex: 1,
        height: undefined,
        width: undefined
    },
});

// BottomNavigation.defaultProps = {
//     iconSize: 25,
//     // label: 'Password',
//     iconColor: "#222222"
// }

// BottomNavigation.propTypes = {
//     iconSize: PropTypes.number,
//     label: PropTypes.string,
//     iconColor: PropTypes.string
// };

export default BottomNavigation;