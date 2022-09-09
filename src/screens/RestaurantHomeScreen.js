import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function RestaurantHomeScreen() {
  return (
    <View
      style={{flex: 1, backgroundColor: colors.black, alignItems: 'center'}}>
      <Text>RestaurantHomeScreen</Text>
    </View>
  );
}
