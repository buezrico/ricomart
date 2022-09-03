import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AuthStack() {
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        // options={{animation: 'slide_from_bottom'}}
      />
      <Auth.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen} />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Auth.Screen
        name="SearchScreen"
        component={SearchScreen}
        // options={{animation: 'slide_from_bottom'}}
      />
      <Auth.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        // options={{animation: 'slide_from_bottom'}}
      />
    </Auth.Navigator>
  );
}
