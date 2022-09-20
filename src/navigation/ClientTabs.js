import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-ico';
import {colors} from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import {ClientStack} from './ClientStack';
import HomeStack from './HomeStack';

const ClientTabs = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: colors.buttons,
  tabBarInactiveTintColor: colors.black,

  headerShown: false,
  tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},

  tabBarStyle: {
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
    // backgroundColor: colors.grey5,
  },
};

const color = colors.grey1;
export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator screenOptions={screenOptions}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" group="ui-interface" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="Search"
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="searching-magnifying-glass"
              group="material-design"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="shop" group="miscellaneous" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="round-account-button-with-user-inside"
              group="material-design"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
