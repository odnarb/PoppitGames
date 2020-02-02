import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    passwordStyleSheet as styles,
    passwordInputIconSize as defaultIconSize,
    passwordInputIconColor as defaultIconColor
} from '../components/globalstyles';

class BCPasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            isPassword: true
        }
    }

    changePwdType = () => {
        const { isPassword } = this.state;
        // set new state value
        this.setState({
            icEye: isPassword ? "visibility" : "visibility-off",
            isPassword: !isPassword,
        });

    };

    render() {
        const { placeholder, underlineColorAndroid, textColor, iconColor, iconSize } = this.props;
        const { icEye, isPassword } = this.state;

        let iconColorReal = defaultIconColor;
        let iconSizeReal = defaultIconSize;

        if(iconColor){
           iconColorReal = iconColor;
        }
        if(iconSize){
           iconSizeReal = iconSize;
        }

        return (
            <View style={{ width: "100%" }}>
                <TextInput
                    {...this.props}
                    placeholder={placeholder}
                    placeholderTextColor={textColor}
                    style={styles.bcPassword}
                    secureTextEntry={isPassword}
                    underlineColorAndroid={underlineColorAndroid} />
                <Icon style={{ position: 'absolute', top: 10, right: 0 }}
                    name={icEye}
                    size={iconSizeReal}
                    color={iconColorReal}
                    onPress={this.changePwdType} />
            </View>
        );
    }
}

export default BCPasswordInputText;