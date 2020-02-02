import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from "prop-types";
import { TextField } from 'react-native-material-textfield';

import {
    passwordStyleSheet as styles,
    passwordInputIconSize as iconSize,
    passwordInputIconColor as iconColor
} from '../components/globalstyles';

class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            isPassword: true
        }
    }

    getRef = (ref) => {
        if (this.props.getRef)
            this.props.getRef(ref)
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
        const { label, style, textColor } = this.props;
        const { icEye, isPassword } = this.state;

        return (
            <View style={style}>
                <TextField
                    {...this.props}
                    ref={this.getRef}
                    textColor={textColor}
                    secureTextEntry={isPassword}
                    label={label} />
                <Icon style={styles.icon}
                    name={icEye}
                    size={iconSize}
                    color={iconColor}
                    onPress={this.changePwdType} />
            </View>
        );
    }
}

PasswordInputText.defaultProps = {
    iconSize: 25,
    // label: 'Password',
    iconColor: "#222222"
}

PasswordInputText.propTypes = {
    iconSize: PropTypes.number,
    label: PropTypes.string,
    iconColor: PropTypes.string
};

export default PasswordInputText;