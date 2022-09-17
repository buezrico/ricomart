import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductHomeScreen from '../screens/ProductHomeScreen';

const ClientStacks = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export function ClientStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'RestaurantHomeScreen') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <ClientStacks.Navigator screenOptions={screenOptions}>
      <ClientStacks.Screen name="SearchScreen" component={SearchScreen} />
      <ClientStacks.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
      />
      <ClientStacks.Screen name="ShopHomeScreen" component={ShopHomeScreen} />
      <ClientStacks.Screen
        name="ProductHomeScreen"
        component={ProductHomeScreen}
      />
    </ClientStacks.Navigator>
  );
}
