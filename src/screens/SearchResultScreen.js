import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import SearchResultCard from '../components/SearchResultCard';
import {stores} from '../global/data';

export default function SearchResult({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{padding: 10}}
        data={stores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <SearchResultCard
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
        ListHeaderComponent={
          <View style={{paddingBottom: 10, paddingLeft: 5, paddingTop: 5}}>
            <Text
              style={{
                color: colors.black,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {stores.length} results found
              {/* for {route.params.product} */}
            </Text>
          </View>
        }
      />
    </View>
  );
}
