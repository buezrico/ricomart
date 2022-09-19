import React from 'react';
import {Image, SectionList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ico';
import {stores} from '../global/data';
import {colors, parameters} from '../global/styles';

export default function ShopProducts({id, navigation}) {
  return (
    //
    <View style={{paddingVertical: 15, paddingHorizontal: 10}}>
      {stores[id].products.map((product, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProductHomeScreen', {
                product: product,
                id: product.id,
              })
            }>
            <View
              style={{
                backgroundColor: colors.white,
                marginBottom: 20,
                ...parameters.shadow,
                borderRadius: 2,
                padding: 10,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: colors.white,
                  paddingVertical: 3,
                  paddingHorizontal: 5,
                  zIndex: 1,
                }}>
                <Text
                  style={{
                    color: colors.buttons,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  {product.discount}% off
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 15}}>
                    <Image
                      source={product.image_url}
                      style={{width: 100, height: 90}}
                    />
                  </View>

                  <View
                    style={{
                      paddingHorizontal: 2,
                      maxWidth: 220,
                      height: 85,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: colors.black,
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {product.name}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: colors.grey1,
                        fontSize: 14,
                        marginBottom: 5,
                      }}>
                      {product.description}
                    </Text>

                    <Text
                      style={{
                        color: colors.buttons,
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      ₦{product.price}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: colors.buttons,
                      padding: 8,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: colors.buttons,
                    }}>
                    <Icon
                      name="shopping-cart"
                      height={15}
                      width={15}
                      group="ui-interface"
                      color={colors.buttons}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: colors.buttons,
                      padding: 5,
                      // borderRadius: 10,
                    }}>
                    <Icon name="heart-shape-outline" group="font-awesome" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
