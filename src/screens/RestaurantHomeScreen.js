import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/styles';
import RestaurantHeader from '../components/RestaurantHeader';
import {stores} from '../global/data';
import {TabBar, TabView} from 'react-native-tab-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

export default function RestaurantHomeScreen({navigation, route}) {
  const {id, restaurant} = route.params;
  const store = stores[id];

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

          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.black,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {store.name} - {store.location}
              </Text>
              <Text style={{color: colors.black, marginTop: 5, fontSize: 16}}>
                ⭐ {store.rating} • ₦₦ •{' '}
                {store.category.map(cat => cat).join('  •  ')}
              </Text>
            </View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                backgroundColor: colors.white,
                color: colors.black,
                padding: 10,
                borderRadius: 10,
                position: 'absolute',
                top: -20,
                right: 20,
              }}>
              {store.deliveryTime.map(day => day).join(' - ')} Days
            </Text>
          </View>
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
      </ScrollView>
    </View>
  );
}
