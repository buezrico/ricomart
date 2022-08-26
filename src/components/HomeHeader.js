import {Avatar} from '@rneui/themed';
import React from 'react';
import {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-ico';
import MarqueeView from 'react-native-marquee-view';
import {colors, parameters} from '../global/styles';

export default function HomeHeader({navigation, searchModal, setSearchModal}) {
  return (
    <View style={styles.header}>
      <View style={{width: '50%', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: 10}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{height: 35, width: 35}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 25}}>
            Rico
          </Text>
          <Text
            style={{color: colors.buttons, fontWeight: 'bold', fontSize: 25}}>
            Mart
          </Text>
        </View>
      </View>
      {/* <Pressable activeOpacity={0.5} onPress={() => setSearchModal(true)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.headerText,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: colors.black,
            borderWidth: 0.5,
            ...parameters.shadow,
          }}>
          <Icon name="search" group="essential" color={colors.black} />
          <Text
            style={{
              ...styles.headerText,
              color: colors.grey2,
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            Search for vendors and products
          </Text>
        </View>
      </Pressable> */}

      {/* <View style={{width: 150}}>
        <MarqueeView speed={0.06}>
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.headerText}>
              Free delivery in Port-Harcourt and Lagos!!
            </Text>
          </View>
        </MarqueeView>
      </View> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
        }}>
        <Icon
          name="search"
          group="essential"
          color={colors.black}
          height={25}
          width={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
        }}>
        <Icon
          name="shopping-cart"
          height={25}
          width={25}
          color={colors.black}
          group="ui-interface"
          badge={{
            value: '20',
            fontSize: 180,
            position: 'top_right',
            radius: 150,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
        }}>
        <Avatar
          rounded
          avatarStyle={{
            borderWidth: 2,
            borderColor: colors.black,
          }}
          source={require('../../assets/images/featured_items/hublot.jpg')}
          size={35}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 20,
  },

  headerText: {
    color: colors.black,
    fontSize: 15,
  },
});
