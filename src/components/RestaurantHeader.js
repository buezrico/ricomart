import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {stores} from '../global/data';
import Icon from 'react-native-ico';

export default function RestaurantHeader({navigation, id}) {
  return (
    <View style={{}}>
      <ImageBackground
        style={{height: 150, width: '100%'}}
        source={stores[id].image_url}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              backgroundColor: colors.white,
              borderRadius: 50,
            }}>
            <Icon
              name="left-arrow-key-1"
              group="material-design"
              color={colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.6}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              backgroundColor: colors.white,
              borderRadius: 50,
            }}>
            <Icon name="heart-outline-shape" group="coolicons" color="red" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
