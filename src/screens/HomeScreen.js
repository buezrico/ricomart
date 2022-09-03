import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-ico';
import Categories from '../components/Categories';
import FeaturedItems from '../components/FeaturedItems';
import HomeHeader from '../components/HomeHeader';
import Location from '../components/Location';
import SearchComponent from '../components/SearchComponent';
import Stores from '../components/Stores';
import {stores} from '../global/data';
import {colors} from '../global/styles';

export default function HomeScreen({navigation}) {
  const [searchModal, setSearchModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Nigeria');
  const [currentCategory, setcurrentCategory] = useState('All Stores');

  return (
    <View style={styles.container}>
      <HomeHeader
        navigation={navigation}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
      />

      <Modal visible={searchModal} animationType="fade" transparent={false}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <SearchComponent
            navigation={navigation}
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{paddingTop: 10, paddingBottom: 15, paddingHorizontal: 10}}>
          <Location
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </View>

        <View
          style={{
            backgroundColor: colors.headerText,
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <FeaturedItems />
        </View>

        <View
          style={{
            backgroundColor: colors.grey5,
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <Categories
            currentCategory={currentCategory}
            setcurrentCategory={setcurrentCategory}
          />
        </View>

        <View
          style={{
            // paddingTop: 15,
            paddingHorizontal: 10,
          }}>
          <Stores
            currentLocation={currentLocation}
            currentCategory={currentCategory}
            stores={stores}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionButton: {
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  locationButton: {
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
  },
});
