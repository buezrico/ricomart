import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import SearchResultCard from '../components/SearchResultCard';

export default function SearchResult({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10}}>
        <Text style={{color: colors.black, fontSize: 18}}>
          Showing results for {route.params.product}
        </Text>
      </View>

      <View>
        <SearchResultCard />
      </View>
    </View>
  );
}
