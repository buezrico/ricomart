import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';

const App = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
export default function AppStack() {
  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        // options={{animation: 'slide_from_bottom'}}
      />
    </App.Navigator>
  );
}
