import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, parameters} from '../global/styles';

export default function Stores({stores, currentLocation, currentCategory}) {
  const [storeLength, SetStoreLength] = useState();

  useEffect(() => {
    const lengthStore = stores
      .filter(store =>
        currentLocation == 'Nigeria'
          ? store.location == store.location
          : currentLocation == store.location,
      )
      .filter(store =>
        currentCategory == 'All Stores'
          ? store.category == store.category
          : store.category.includes(currentCategory),
      ).length;
    SetStoreLength(lengthStore);
  }, [currentCategory, currentLocation]);

  return storeLength == 0 ? (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <Text style={{color: colors.black, fontSize: 20, fontWeight: 'bold'}}>
        No Vendor Available in this Region
      </Text>
      <Text style={{color: colors.black, fontSize: 18}}>
        Search other regions or categories
      </Text>
    </View>
  ) : (
    stores
      .filter(store =>
        currentLocation == 'Nigeria'
          ? store.location == store.location
          : currentLocation == store.location,
      )
      .filter(store =>
        currentCategory == 'All Stores'
          ? store.category == store.category
          : store.category.includes(currentCategory),
      )
      .map((store, index) => {
        return (
          <TouchableOpacity activeOpacity={0.8} key={index}>
            <View
              style={{
                backgroundColor: colors.white,
                marginBottom: 25,
                ...parameters.shadow,
                borderRadius: 2,
              }}>
              <View>
                <Image
                  source={store.image_url}
                  style={{width: '100%', height: 160}}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    padding: 10,
                    backgroundColor: 'rgba(0,0,0,0.3)',
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
                    {store.name}
                  </Text>
                  <Text
                    style={{color: colors.white, fontSize: 15, marginTop: 5}}>
                    {store.category.map(cat => cat).join('  •  ')}
                  </Text>
                  <Text style={{color: colors.white, marginTop: 5}}>
                    ⭐ {store.rating} • ₦₦
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      marginTop: 10,
                      fontWeight: 'bold',
                    }}>
                    {store.deliveryTime.map(day => day).join(' - ')} Days
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {store.products.map((product, index) => {
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
            </View>
          </TouchableOpacity>
        );
      })
  );
}
