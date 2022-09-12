import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {stores} from '../../global/data';
import {colors} from '../../global/styles';

export default function ProductScreen({id}) {
  return (
    <View>
      {stores[id].products.map((product, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={{
              marginRight: 20,
            }}>
            <View>
              <Image
                source={product.image_url}
                style={{width: 90, height: 80}}
              />
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
                  {product.discount}% off
                </Text>
              </View>
            </View>

            <View style={{paddingHorizontal: 2}}>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.grey2,
                  fontSize: 15,
                  maxWidth: 100,
                  fontWeight: 'bold',
                }}>
                {product.name}
              </Text>

              <Text style={{color: colors.buttons, fontSize: 16}}>
                ₦{product.price}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
