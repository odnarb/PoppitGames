import React from 'react';

import {
    Image,
    View
} from 'react-native';

import { styles } from '../components/globalstyles';

class LogoBanner extends React.Component {
    render() {
        const { container, size } = this.props;

        let containerStyle = [styles.logoContainer2];

        let logoStyle = [styles.logo];

        if(container === "absolute") {
          containerStyle = [styles.fixedLogoContainer];
        } else if (container === "flex1"){
          containerStyle = [styles.logoContainer];
        }

        if( size === "small" ) {
          logoStyle = [styles.smallLogo];
        } else if ( size === "scaled" ){
          logoStyle = [styles.scaledLogo];
        }

        return (
        <View style={containerStyle}>
            <Image
              source={{uri: "poppit_logo_blue"}}
              style={logoStyle}
              resizeMode="contain" />
        </View>
        );
    }
}

export default LogoBanner;