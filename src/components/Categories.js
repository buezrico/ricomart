import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../global/styles';
import {categories} from '../global/data';

export default function Categories({currentCategory, setcurrentCategory}) {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item.name}
      extraData={currentCategory}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => setcurrentCategory(item.name)}
          activeOpacity={0.8}
          style={{
            marginRight: 10,
            backgroundColor:
              currentCategory === item.name
                ? colors.buttons
                : colors.headerText,
            paddingVertical: 10,
            borderRadius: 10,
            width: 85,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Image source={item.image_url} style={{width: 35, height: 35}} />
            <Text
              style={{
                color:
                  currentCategory === item.name
                    ? colors.headerText
                    : colors.grey1,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
