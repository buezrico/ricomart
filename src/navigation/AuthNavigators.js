import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';
import {ClientStack} from './ClientStack';
import DrawerNavigator from './DrawerNavigator';

const Auth = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AuthStack() {
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen} />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        // options={{animation: 'slide_from_bottom'}}
      />
    </Auth.Navigator>
  );
}
