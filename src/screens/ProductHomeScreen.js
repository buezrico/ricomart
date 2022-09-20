import {Button} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Animated,
} from 'react-native';
import Icon from 'react-native-ico';
import Header from '../components/Header';
import {colors, parameters} from '../global/styles';

export default function ProductHomeScreen({route, navigation}) {
  const index = 10;
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHandler = () => {
    if (liked == false) setVisible(true);

    setLiked(!liked);
    setCounter(index);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 2,
        friction: 1,
        useNativeDriver: true,
      }).start(() => {
        // Animated.spring(currentValue, {
        //   toValue: 1,
        //   useNativeDriver: true,
        //   friction: 2,
        // }).start(() => {
        setVisible(false);
        // });
      });
    }
  }, [liked]);

  const product = route.params.product;
  const store = route.params.store;
  return (
    <View style={{flex: 1}}>
      {/* <Header title={''} type="left-arrow-key" navigation={navigation} /> */}
      <View style={{}}>
        <ImageBackground
          style={{height: 380, width: '100%'}}
          source={product.image_url}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingRight: 0,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
                backgroundColor: colors.white,
                ...parameters.shadow,
                borderRadius: 50,
              }}>
              <Icon
                name="left-arrow-key-1"
                group="material-design"
                color={colors.black}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={likeHandler}
                activeOpacity={0.6}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                  backgroundColor: colors.white,
                  ...parameters.shadow,
                  marginRight: 20,
                  borderRadius: 50,
                }}>
                {liked && index == counter ? (
                  <Icon
                    name="favorite-heart-button"
                    group="material-design"
                    color="red"
                  />
                ) : (
                  <Icon
                    name="heart-outline-shape"
                    group="coolicons"
                    color="red"
                  />
                )}
              </TouchableOpacity>
              {/* <TouchableOpacity
              style={{
                // backgroundColor: c,

                // borderRadius: 50,
                // borderColor: colors.white,
                // borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
                marginRight: 20,
              }}>
              <Icon
                name="show-more-button-with-three-dots"
                group="material-design"
                // height={15}
                // width={15}
                color={colors.white}
              />
            </TouchableOpacity> */}
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: 12,
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginTop: -80}}>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="map-placeholder"
                group="material-design"
                color={colors.white}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                {store.name},{''} {store.location}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.white,
                ...parameters.shadow,
                width: '100%',
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <View style={{marginBottom: 10}}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {store.name}
                </Text>
                <Text style={{color: colors.black, marginTop: 5, fontSize: 16}}>
                  ⭐
                  {`${store.rating}   •   ₦₦   •   ${store.deliveryTime
                    .map(day => day)
                    .join(' - ')} Days`}
                  {/* {store.category.map(cat => cat).join('  •  ')} */}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Button
                  onPress={() => navigation.navigate('SignUpScreen')}
                  title="Price am"
                  buttonStyle={{
                    ...parameters.styledButton,
                    backgroundColor: 'transparent',
                    width: 180,
                    borderRadius: 5,
                    borderWidth: 1.5,
                  }}
                  titleStyle={{
                    ...parameters.buttonTitle,
                    color: colors.buttons,
                  }}
                />
                <Button
                  title="Chat Seller"
                  buttonStyle={{
                    // ...parameters.shadow,
                    ...parameters.styledButton,
                    // paddingHorizontal: 0,
                    width: 180,
                    borderRadius: 5,
                  }}
                  titleStyle={parameters.buttonTitle}
                  onPress={() => navigation.navigate('SignInScreen')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: colors.buttons,
          height: 50,
          width: '100%',
          justifyContent: 'center',
          paddingHorizontal: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold'}}>
          View Cart
        </Text>
        <View>
          <Text style={{fontSize: 25, color: colors.white, fontWeight: 'bold'}}>
            0
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
