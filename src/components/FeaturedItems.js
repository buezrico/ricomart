import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ico';
import {colors} from '../global/styles';
import {featuredItems} from '../global/data';

export default function FeaturedItems() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {featuredItems.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={{
              marginRight: 15,
            }}>
            <View>
              <Image source={item.image_url} style={{width: 100, height: 90}} />
              <View
                style={{
                  position: 'absolute',
                  right: '0%',
                  top: '0%',
                  backgroundColor: colors.white,
                  paddingHorizontal: 3,
                }}>
                <Text
                  style={{
                    color: colors.buttons,
                    fontSize: 12,
                  }}>
                  {item.discount}% off
                </Text>
              </View>
            </View>

            <View style={{paddingHorizontal: 2}}>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.grey2,
                  fontSize: 12,
                  maxWidth: 100,
                }}>
                {item.name}
              </Text>

              <Text style={{color: colors.grey1, fontSize: 16}}>
                ₦{item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="shop"
                  group="shopping"
                  width={15}
                  height={15}
                  color={colors.buttons}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    color: colors.grey2,
                    fontSize: 12,
                    marginLeft: 5,
                    width: 70,
                  }}>
                  {item.store}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
