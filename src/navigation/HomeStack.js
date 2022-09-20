import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import ProductHomeScreen from '../screens/ProductHomeScreen';

const HomeStacks = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function HomeStack() {
  return (
    <HomeStacks.Navigator screenOptions={screenOptions}>
      <HomeStacks.Screen name="ShopHomeScreen" component={ShopHomeScreen} />
      <HomeStacks.Screen
        name="ProductHomeScreen"
        component={ProductHomeScreen}
      />
    </HomeStacks.Navigator>
  );
}
