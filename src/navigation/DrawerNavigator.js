import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import Icon from 'react-native-ico';
import {colors} from '../global/styles';
import BusinessConsoleScreen from '../screens/authScreens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerLabelStyle: {fontSize: 15, fontWeight: 'bold'},

          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              group="ui-interface"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business Console',
          drawerLabelStyle: {fontSize: 15, fontWeight: 'bold'},

          drawerIcon: ({focused, size}) => (
            <Icon
              name="shop"
              group="miscellaneous"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
