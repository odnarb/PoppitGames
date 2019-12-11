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

// authentication views
import AuthLoadingScreen from './screens/AuthLoading';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import SignInScreen from './screens/SignIn';
import ForgotPasswordScreen from './screens/ForgotPassword';
import AccountLockedScreen from './screens/AccountLocked';

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPassword: ForgotPasswordScreen,
    AccountLocked: AccountLockedScreen
});

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