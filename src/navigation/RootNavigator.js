import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SignInContext} from '../contexts/authContext';

export default function RootNavigator() {
  const {signedIn} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {signedIn.userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
