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
import EmailSignupScreen from './screens/EmailSignup';
import RecoverPasswordScreen from './screens/RecoverPassword';
import LearnMoreScreen from './screens/LearnMore';

//Home screen is just a landing page to show links to the different screens for now..
import HomeScreen from './screens/Home';
import MapsScreen from './screens/Maps';
import GameScreen from './screens/Game';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import NotificationsScreen from './screens/Notifications';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Maps: MapsScreen,
    Game: GameScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Notifications: NotificationsScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    EmailSignUp: EmailSignupScreen,
    RecoverPassword: RecoverPasswordScreen,
    LearnMore: LearnMoreScreen
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

  render() {
    return (
       <AppContainer />
    );
  }
}