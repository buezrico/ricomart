import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

export default function SearchResultScreen({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: colors.black}}>
        {' '}
        Showing results for {route.params.item}
      </Text>
    </View>
  );
}
