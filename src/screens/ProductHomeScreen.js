import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProductHomeScreen({route, product}) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: colors.buttons,
          height: 50,
          width: '100%',
          justifyContent: 'center',
          paddingHorizontal: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold'}}>
          View Cart
        </Text>
        <View>
          <Text style={{fontSize: 25, color: colors.white, fontWeight: 'bold'}}>
            0
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
