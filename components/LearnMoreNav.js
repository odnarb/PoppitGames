import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

import { learnMoreNavStyleSheet as styles, navDotSize, navIconSize } from '../components/globalstyles';

class LearnMoreNav extends React.Component {

    render() {
        const { navToFn, nextNavText, slideNum} = this.props;
        const darkColor = "#000";
        const lightColor = "#dcdc";

        const navDotIcon = 'circle-small';
        const iconColor = darkColor;


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
                  size={navIconSize} />
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