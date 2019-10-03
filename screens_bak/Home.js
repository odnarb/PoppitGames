import React from 'react';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'PoppitGames',
  };

  render() {
    return (
      <View>
        <Text>This should show the map with data..</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}