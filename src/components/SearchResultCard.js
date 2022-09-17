import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors, parameters} from '../global/styles';

export default function SearchResultCard({
  index,
  image,
  name,
  category,
  rating,
  deliveryTime,
  products,
  navigation,
}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.white,
          marginBottom: 20,
          ...parameters.shadow,
          borderRadius: 2,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ShopHomeScreen', {
              id: index,
              restaurant: name,
            })
          }>
          <Image source={image} style={{width: '100%', height: 160}} />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderTopRightRadius: 10,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: colors.white,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {name}
            </Text>
            <Text style={{color: colors.white, fontSize: 15, marginTop: 5}}>
              {category.map(cat => cat).join('  •  ')}
            </Text>
            <Text style={{color: colors.white, marginTop: 5}}>
              ⭐ {rating} • ₦₦
            </Text>
            <Text
              style={{color: colors.white, marginTop: 10, fontWeight: 'bold'}}>
              {deliveryTime.map(day => day).join(' - ')} Days
            </Text>
          </View>
        </TouchableOpacity>

        <ScrollView
          horizontal
          style={{
            paddingVertical: 10,
            paddingLeft: 10,
          }}>
          {products
            // .filter(item => item.includes(product))
            .map((product, index) => {
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
        </ScrollView>
      </View>
    </View>
  );
}
