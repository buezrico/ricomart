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
                borderRadius: 50,
              }}>
              <Icon name="left-arrow-key-1" group="material-design" />
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
                  marginRight: 20,
                  borderRadius: 50,
                }}>
                {liked && index == counter ? (
                  <Icon name="bookmark-white" group="font-awesome" />
                ) : (
                  <Icon name="bookmark-black-shape" group="font-awesome" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            // width: '100%',
            paddingHorizontal: 10,
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
                numberOfLines={1}
                style={{
                  width: 300,
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
                padding: 10,
                margin: 8,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <View style={{marginBottom: 15}}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {product.name}
                </Text>
                <Text
                  style={{
                    color: colors.buttons,
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {/* {`${store.rating}   •   ₦₦   •   ${store.deliveryTime
                    .map(day => day)
                    .join(' - ')} Days`} */}
                  {`₦ ${product.price}`}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Button
                  onPress={() => {}}
                  title="CALL"
                  buttonStyle={{
                    ...parameters.styledButton,
                    backgroundColor: 'transparent',
                    width: 170,
                    borderRadius: 5,
                    borderWidth: 1.5,
                  }}
                  icon={
                    <Icon
                      name="phone-call-1"
                      group="ui-interface"
                      color={colors.buttons}
                      style={{marginRight: 10}}
                    />
                  }
                  titleStyle={{
                    ...parameters.buttonTitle,
                    color: colors.buttons,
                  }}
                />
                <Button
                  title="Chat Seller"
                  buttonStyle={{
                    ...parameters.styledButton,
                    width: 170,
                    borderRadius: 5,
                  }}
                  titleStyle={parameters.buttonTitle}
                  onPress={() => {}}
                  icon={
                    <Icon
                      name="chat"
                      group="miscellaneous"
                      color={colors.white}
                      style={{marginRight: 10}}
                    />
                  }
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: colors.white,
                ...parameters.shadow,
                padding: 10,
                margin: 8,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <Text style={{color: colors.black, textAlign: 'justify'}}>
                {product.description}
              </Text>
            </View>

            <View style={{marginTop: 10, margin: 8}}>
              <Button
                onPress={() => {}}
                title="Negotiate Price with Seller"
                buttonStyle={{
                  ...parameters.styledButton,
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderWidth: 1.5,
                }}
                icon={
                  <Icon
                    name="question-mark-in-circular-shape"
                    color={colors.buttons}
                    style={{marginRight: 10}}
                  />
                }
                titleStyle={{
                  ...parameters.buttonTitle,
                  color: colors.buttons,
                }}
              />
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
            justifyContent: 'space-around',
            marginTop: -20,
            marginBottom: 5,
            borderRadius: 10,
            ...parameters.shadow,
          }}>
          <Icon
            name="shopping-cart"
            group="ui-interface"
            color={colors.white}
          />
          <Text
            style={{
              fontSize: 20,
              color: colors.white,
              fontWeight: 'bold',
            }}>
            Add Item to Cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
