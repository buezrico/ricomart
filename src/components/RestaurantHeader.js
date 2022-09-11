import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../global/styles';
import {stores} from '../global/data';
import Icon from 'react-native-ico';
import {useState} from 'react';

export default function RestaurantHeader({navigation, id}) {
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

  return (
    <View style={{}}>
      <ImageBackground
        style={{height: 150, width: '100%'}}
        source={stores[id].image_url}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
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
            <Icon
              name="left-arrow-key-1"
              group="material-design"
              color={colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={likeHandler}
            activeOpacity={0.6}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              backgroundColor: colors.white,
              borderRadius: 50,
            }}>
            {liked && index == counter ? (
              <Icon
                name="favorite-heart-button"
                group="material-design"
                color="red"
              />
            ) : (
              <Icon name="heart-outline-shape" group="coolicons" color="red" />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: '45%',
          }}>
          {visible && index == counter && (
            <Animated.View style={{transform: [{scale: currentValue}]}}>
              <Icon
                name="favorite-heart-button"
                group="material-design"
                color="red"
                height={40}
                width={40}
              />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
