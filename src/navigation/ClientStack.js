import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';

const ClientStacks = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export function ClientStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'SearchResultScreeninactive') {
      navigation.setOptions({tabBarVisible: false});
      console.log(routeName + 'active');
    } else {
      navigation.setOptions({tabBarVisible: true});
      console.log(routeName + 'inactive');
    }
  }, [navigation, route]);
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
