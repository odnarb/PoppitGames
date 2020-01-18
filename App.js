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
import LearnMore2Screen from './screens/LearnMore2';
import LearnMore3Screen from './screens/LearnMore3';

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
    Notifications: NotificationsScreen,
    LearnMore: LearnMoreScreen,
    LearnMore2: LearnMore2Screen,
    LearnMore3: LearnMore3Screen,
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    EmailSignUp: EmailSignupScreen,
    RecoverPassword: RecoverPasswordScreen,
    //This will need to be part of the auth stack, since you don't have to sin in to see this content
    // LearnMore: LearnMoreScreen
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