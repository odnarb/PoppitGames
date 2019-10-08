import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import AuthLoadingScreen from './screens/AuthLoading';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/Home';
import OtherScreen from './screens/Other';
import PenaltyKicksGameScreen from './screens/PenaltyKicksGame';
import MapsScreen from './screens/Maps';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Other: OtherScreen,
    PenaltyKicksGame: PenaltyKicksGameScreen,
    Maps: MapsScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen
});

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: 'AuthLoading',
//     }
//   )
// );

//////////////

const MainStack = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
)

const AppContainer  = createAppContainer(MainStack);

export default class App extends React.Component {

  // login = async() => {
  //   //Force user to login
  //   try{
  //     let user = await auth.signInWithEmailAndPassword('xyz@test.com', 'XXXXX');
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  render() {
    return (
       <AppContainer />
    );
  }
}