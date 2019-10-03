import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// authentication views
import AuthLoadingScreen from './screens/AuthLoading';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import SignInScreen from './screens/SignIn';
import ForgotPasswordScreen from './screens/ForgotPassword';
import AccountLockedScreen from './screens/AccountLocked';


const AppStack = createStackNavigator({ Home: HomeScreen });

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPassword: ForgotPasswordScreen,
    AccountLocked: AccountLockedScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);