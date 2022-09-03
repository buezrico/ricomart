import {Button} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../global/styles';

const locations = [
  {
    name: 'Nigeria',
  },
  {
    name: 'Port-Harcourt',
  },
  {
    name: 'Lagos',
  },
  {
    name: 'Abuja',
  },
  {
    name: 'Owerri',
  },
  {
    name: 'Calabar',
  },
  {
    name: 'Ibadan',
  },
];

export default function Location({currentLocation, setCurrentLocation}) {
  const [indexCheck, setIndexCheck] = useState(0);

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={locations}
      keyExtractor={item => item.name}
      extraData={currentLocation}
      renderItem={({item, index}) => (
        <Button
          title={item.name}
          buttonStyle={{
            ...styles.locationButton,
            backgroundColor:
              currentLocation === item.name ? colors.buttons : colors.grey3,
          }}
          onPress={() => setCurrentLocation(item.name)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  locationButton: {
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
  },
});
