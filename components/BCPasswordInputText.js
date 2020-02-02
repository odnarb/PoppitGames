import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from "prop-types";

import {
    passwordStyleSheet as styles,
    passwordInputIconSize as iconSize,
    passwordInputIconColor as iconColor
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
        const { placeholder, underlineColorAndroid } = this.props;
        const { icEye, isPassword } = this.state;

        return (
            <View style={{ width: "100%" }}>
                <TextInput
                    {...this.props}
                    placeholder={placeholder}
                    style={styles.bcPassword}
                    secureTextEntry={isPassword}
                    underlineColorAndroid={underlineColorAndroid} />
                <Icon style={{ position: 'absolute', top: 10, right: 0 }}
                    name={icEye}
                    size={iconSize}
                    color={iconColor}
                    onPress={this.changePwdType} />
            </View>
        );
    }
}

export default BCPasswordInputText;