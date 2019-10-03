import React from 'react';

class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'PoppitGames: Forgot Password',
  };

  render() {
    return (
      <View>
        <Button title="Forgot my password!" onPress={this._forgotPasswordAsync} />
      </View>
    );
  }

  _forgotPasswordAsync = async () => {
    await AsyncStorage.setItem('forgotpasswordToken', 'abc123');
    this.props.navigation.navigate('App');
  };
}
