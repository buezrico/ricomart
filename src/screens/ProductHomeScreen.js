import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function ProductHomeScreen({route, product}) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      }}>
      <Text style={{fontSize: 30}}>{route.params.name}</Text>
    </View>
  );
}
