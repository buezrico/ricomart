import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/styles';
import RestaurantHeader from '../components/RestaurantHeader';
import {stores} from '../global/data';
import {TabBar, TabView} from 'react-native-tab-view';
import ProductScreen from './RestaurantTabs/ProductScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

export default function RestaurantHomeScreen({navigation, route}) {
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

  return (
    <View style={{}}>
      <ScrollView>
        <View>
          <RestaurantHeader
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
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <ProductScreen id={id} />}
      </ScrollView>
    </View>
  );
}
