import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';

const ClientStacks = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export function ClientStack() {
  return (
    <ClientStacks.Navigator screenOptions={screenOptions}>
      <ClientStacks.Screen name="SearchScreen" component={SearchScreen} />
      <ClientStacks.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
      />
      <ClientStacks.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
      />
    </ClientStacks.Navigator>
  );
}
