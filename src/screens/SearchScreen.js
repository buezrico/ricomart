import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen({navigation}) {
  const [searchModal, setSearchModal] = useState(false);

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <SearchComponent
        navigation={navigation}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
      />
    </View>
  );
}
