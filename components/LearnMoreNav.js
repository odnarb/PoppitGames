import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

import {
  learnMoreNavStyleSheet as styles,
  learnMoreNavDotSize as navDotSize,
  learnMoreNavIconSize as navIconSize,
  learnMoreNavIconLightColor as lightColor,
  learnMoreNavIconDarkColor as darkColor
} from '../components/globalstyles';

class LearnMoreNav extends React.Component {
    render() {
        const { navToFn, nextNavText, slideNum} = this.props;

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
            <Icon name='circle-small' type='material-community' color={nav1Color} size={navDotSize} />
            <Icon name='circle-small' type='material-community' color={nav2Color} size={navDotSize} style={styles.dot2} />
            <Icon name='circle-small' type='material-community' color={nav3Color} size={navDotSize} />
          </View>

          <View style={styles.navBtnGroup}>
            <TouchableOpacity style={styles.highLightBtn} onPress={() => this._navTo('AuthLoading')}>
              <View style={styles.navBtn}>
                <Text style={[styles.flatLightGrey,styles.navSkip]}>Skip</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.highLightBtn} onPress={navToFn}>
              <View style={styles.navBtn}>
                <Text style={[styles.grey,styles.navNext]}>{nextNavText}</Text>
                <Icon
                  name='chevron-right'
                  type='material-community'
                  color={iconColor}
                  size={navIconSize} />
              </View>
            </TouchableOpacity>
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