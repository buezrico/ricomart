import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import SearchResultCard from '../components/SearchResultCard';
import {stores} from '../global/data';
import Icon from 'react-native-ico';

export default function SearchResult({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: colors.buttons,
          paddingHorizontal: 20,
          paddingVertical: 8,
          alignItems: 'center',
          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            marginRight: 20,
            // backgroundColor: colors.white,
            // borderRadius: 50,
          }}>
          <Icon
            name="left-arrow-key-1"
            group="material-design"
            color={colors.white}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {stores.length} results found
          {/* for {route.params.product} */}
        </Text>
      </View>
      <FlatList
        style={{padding: 10}}
        data={stores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <SearchResultCard
              index={item.id}
              image={item.image_url}
              name={item.name}
              category={item.category}
              rating={item.rating}
              deliveryTime={item.deliveryTime}
              products={item.products}
              product={route.params.product}
              navigation={navigation}
            />
          );
        }}
        // ListHeaderComponent={
        //   <View
        //     style={{
        //       backgroundColor: colors.buttons,
        //       paddingVertical: 10,
        //       alignItems: 'center',
        //       flexDirection: 'row',
        //       // justifyContent: 'space-between',
        //     }}>
        //     <TouchableOpacity
        //       onPress={() => navigation.goBack()}
        //       activeOpacity={0.6}
        //       style={{
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         height: 40,
        //         width: 40,
        //       }}>
        //       <Icon
        //         name="left-arrow-key-1"
        //         group="material-design"
        //         color={colors.black}
        //       />
        //     </TouchableOpacity>
        //     <Text
        //       style={{
        //         color: colors.black,
        //         fontSize: 20,
        //         fontWeight: 'bold',
        //         textAlign: 'center',
        //       }}>
        //       {stores.length} results found
        //       {/* for {route.params.product} */}
        //     </Text>
        //   </View>
        // }
      />
    </View>
  );
}
