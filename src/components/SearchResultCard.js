import {View, Text} from 'react-native';
import React from 'react';
import {stores} from '../global/data';
import {colors} from '../global/styles';

export default function SearchResultCard() {
  return (
    <View
      style={{
        backgroundColor: colors.black,
        height: 400,
        alignItems: 'center',
      }}>
      {stores.map(store => {
        return store.products.map(product => {
          return <Text>{product.name}</Text>;
        });
      })}
    </View>
  );
}
