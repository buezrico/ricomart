import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductHomeScreen from '../screens/ProductHomeScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import DrawerNavigator from './DrawerNavigator';
import HomeStack from './HomeStack';

const App = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
export default function AppStack() {
  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen
        name="Client"
        component={DrawerNavigator}
        // options={{animation: 'slide_from_bottom'}}
      />
      <App.Screen name="Home" component={HomeStack} />
    </App.Navigator>
  );
}
