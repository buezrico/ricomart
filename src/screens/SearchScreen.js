import React, {useEffect} from 'react';
import {View} from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen({navigation}) {
  useEffect(() => {
    console.log('working');
  }, []);

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <SearchComponent navigation={navigation} />
    </View>
  );
}
