import React from 'react';

class AccountLockedScreen extends React.Component {
  static navigationOptions = {
    title: 'PoppitGames: Account Locked',
  };

  render() {
    return (
      <View>
        <Text>Sorry, your account has been locked.</Text>
      </View>
    );
  }
}
