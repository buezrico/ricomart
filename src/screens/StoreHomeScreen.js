import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors, parameters} from '../global/styles';
import StoreHeader from '../components/StoreHeader';
import {stores} from '../global/data';
import {TabBar, TabView} from 'react-native-tab-view';
import ProductScreen from './StoreTabs/ProductScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

export default function StoreHomeScreen({navigation, route}) {
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
      <ScrollView stickyHeaderIndices={[1]} style={{marginBottom: 30}}>
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
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        <View>{index === 0 && <ProductScreen id={id} />}</View>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.8}>
        <View
          style={{
            backgroundColor: colors.buttons,
            ...parameters.shadow,
            paddingHorizontal: 40,
            height: 50,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color: colors.white}}>View Cart</Text>
          <View>
            <Text style={{fontSize: 25, color: colors.white}}>0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
