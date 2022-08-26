import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, parameters} from '../global/styles';
import {stores} from '../global/data';

export default function Stores() {
  return stores.map((store, index) => {
    return (
      <TouchableOpacity activeOpacity={0.8} key={index}>
        <View
          style={{
            backgroundColor: colors.headerText,
            marginBottom: 20,
            ...parameters.shadow,
            borderRadius: 2,
          }}>
          <View>
            <Image
              source={store.image_url}
              style={{width: '100%', height: 180}}
            />
          </View>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.grey1,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {store.name}
              </Text>
              <Text style={{color: colors.grey2, fontSize: 15, marginTop: 5}}>
                {store.category.map(cat => cat).join('  •  ')}
              </Text>
              <Text style={{color: colors.grey1, marginTop: 5}}>
                ⭐ {store.rating} • ₦₦
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.grey5,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginRight: 10,
                borderRadius: 10,
                ...parameters.shadow,
              }}>
              <Text style={{color: colors.grey1, fontWeight: 'bold'}}>
                {store.deliveryTime.map(day => day).join(' - ')} Days
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
}
