import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Auth stack screens
import AuthLoadingScreen from './screens/AuthLoading';
import SignInScreen from './screens/SignIn';
import EmailSignInScreen from './screens/EmailSignIn';
import EmailSignInErrorScreen from './screens/EmailSignInError';
import EmailSignUpScreen from './screens/EmailSignup';
import EmailSignUpConfirmScreen from './screens/EmailSignUpConfirm';
import RecoverPasswordScreen from './screens/RecoverPassword';
import RecoverPasswordConfirmScreen from './screens/RecoverPasswordConfirm';
import LearnMoreScreen from './screens/LearnMore';
import LearnMore2Screen from './screens/LearnMore2';
import LearnMore3Screen from './screens/LearnMore3';

//The app stack screens
import MapsScreen from './screens/Maps';
import GameScreen from './screens/Game';
import PrizesScreen from './screens/Prizes';
import ProfileScreen from './screens/Profile';
import ProfileEditScreen from './screens/ProfileEdit';
import SettingsScreen from './screens/Settings';
import NotificationsScreen from './screens/Notifications';
import AboutScreen from './screens/About';
import TermsScreen from './screens/Terms';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';

const AppStack = createStackNavigator({
    Maps: MapsScreen,
    Game: GameScreen,
    Prizes: PrizesScreen,
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen,
    Settings: SettingsScreen,
    Notifications: NotificationsScreen,
    About: AboutScreen,
    Terms: TermsScreen,
    PrivacyPolicy: PrivacyPolicyScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    LearnMore: LearnMoreScreen,
    LearnMore2: LearnMore2Screen,
    LearnMore3: LearnMore3Screen,
    EmailSignUp: EmailSignUpScreen,
    EmailSignUpConfirm: EmailSignUpConfirmScreen,
    EmailSignIn: EmailSignInScreen,
    EmailSignInError: EmailSignInErrorScreen,
    RecoverPassword: RecoverPasswordScreen,
    RecoverPasswordConfirm: RecoverPasswordConfirmScreen
});

const MainStack = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
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