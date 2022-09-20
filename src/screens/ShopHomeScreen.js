import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import StoreHeader from '../components/StoreHeader';
import {colors, parameters} from '../global/styles';
import ShopProducts from '../components/ShopProducts';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ShopHomeScreen({navigation, route}) {
  const {id, restaurant} = route.params;

  const [routes] = useState([
    {
      key: 'first',
      title: 'PRODUCTS',
    },
    {
      key: 'second',
      title: 'INFO',
    },
    {
      key: 'third',
      title: 'REVIEWS',
    },
    {
      key: 'fourth',
      title: 'GALLERY',
    },
  ]);

  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.white}}
      tabStyle={{
        width: SCREEN_WIDTH / 4,
        maxHeight: 45,
      }}
      scrollEnabled={true}
      style={{
        backgroundColor: colors.buttons,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      labelStyle={{
        fontWeight: 'bold',
        color: colors.white,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    />
  );

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  // const renderScene = ({route}) => {
  //   switch (route.key) {
  //     case 1:
  //       return <Route1 name={navigation} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[1]}
        style={{marginBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View>
          <StoreHeader
            id={id}
            restaurant={restaurant}
            navigation={navigation}
          />
        </View>

        <View style={{}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={SCREEN_WIDTH}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        <View>
          {index === 0 && <ShopProducts id={id} navigation={navigation} />}
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingBottom: 10,
          backgroundColor: colors.white,
          ...parameters.shadow,
        }}>
        <View
          style={{
            width: '90%',
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 40,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.buttons,
            justifyContent: 'space-between',
            marginTop: -20,
            marginBottom: 5,
            borderRadius: 10,
            ...parameters.shadow,
          }}>
          <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold'}}>
            View Cart
          </Text>
          <View>
            <Text
              style={{fontSize: 25, color: colors.white, fontWeight: 'bold'}}>
              0
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
