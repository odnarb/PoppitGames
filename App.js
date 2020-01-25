import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from './screens/AuthLoading';

import SignInScreen from './screens/SignIn';
import EmailSignInScreen from './screens/EmailSignIn';
import EmailSignupScreen from './screens/EmailSignup';
import RecoverPasswordScreen from './screens/RecoverPassword';
import RecoverPasswordConfirmScreen from './screens/RecoverPasswordConfirm';
import LearnMoreScreen from './screens/LearnMore';
import LearnMore2Screen from './screens/LearnMore2';
import LearnMore3Screen from './screens/LearnMore3';
import EmailSignInErrorScreen from './screens/EmailSignInError';
import PrizesScreen from './screens/Prizes';
import AboutScreen from './screens/About';

//Home screen is just a landing page to show links to the different screens for now..
import HomeScreen from './screens/Home';
import MapsScreen from './screens/Maps';
import GameScreen from './screens/Game';
import ProfileScreen from './screens/Profile';
import ProfileEditScreen from './screens/ProfileEdit';
import SettingsScreen from './screens/Settings';
import NotificationsScreen from './screens/Notifications';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Maps: MapsScreen,
    Game: GameScreen,
    Prizes: PrizesScreen,
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen,
    Settings: SettingsScreen,
    Notifications: NotificationsScreen,
    About: AboutScreen,
    LearnMore: LearnMoreScreen,
    LearnMore2: LearnMore2Screen,
    LearnMore3: LearnMore3Screen,
    EmailSignUp: EmailSignupScreen,
    EmailSignIn: EmailSignInScreen,
    EmailSignInError: EmailSignInErrorScreen,
    RecoverPassword: RecoverPasswordScreen,
    RecoverPasswordConfirm: RecoverPasswordConfirmScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    // EmailSignUp: EmailSignupScreen,
    // EmailSignIn: EmailSignInScreen,
    // EmailSignInError: EmailSignInErrorScreen,
    // RecoverPassword: RecoverPasswordScreen,
    // RecoverPasswordConfirmScreen: RecoverPasswordConfirm
    //This will need to be part of the auth stack, since you don't have to sign in to see this content
    // LearnMore: LearnMoreScreen,
    // LearnMore2: LearnMore2Screen,
    // LearnMore3: LearnMore3Screen
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