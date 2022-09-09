import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import RestaurantHeader from '../components/RestaurantHeader';

export default function RestaurantHomeScreen({navigation, route}) {
  const {id, restaurant} = route.params;
  return (
    <View style={{}}>
      <RestaurantHeader
        id={id}
        restaurant={restaurant}
        navigation={navigation}
      />
    </View>
  );
}
