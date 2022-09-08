import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../components/SearchResult';

const ClientSearch = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export function ClientSearchNavigator() {
  return (
    <Client.Navigator screenOptions={screenOptions}>
      <Client.Screen name="SearchScreen" component={SearchScreen} />
      <Client.Screen name="SearchResultScreen" component={SearchResultScreen} />
    </Client.Navigator>
  );
}
