import {Button} from '@rneui/base';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, parameters} from '../../global/styles';

const slides = [
  {
    text1: 'Discover vendors',
    text2: 'in your area',
    image_url: require('../../../assets/images/sign_in/shop_online.png'),
  },
  {
    text1: 'Amzing shopping',
    text2: 'experience',
    image_url: require('../../../assets/images/sign_in/purchase_successful.png'),
  },
  {
    text1: 'Your order delivered',
    text2: 'to your doorstep',
    image_url: require('../../../assets/images/sign_in/delivery.png'),
  },
];

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1, height: '100%', backgroundColor: 'white'}}>
      <View style={{flex: 9}}>
        <Swiper
          autoplay={true}
          index={0}
          autoplayTimeout={5}
          activeDotColor={colors.buttons}>
          {slides.map((slide, index) => {
            return (
              <View style={{flex: 1}} key={index}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 60,
                    marginBottom: 100,
                  }}>
                  <Text style={styles.text}>{slide.text1}</Text>
                  <Text style={styles.text}>{slide.text2}</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <Image
                    source={slide.image_url}
                    style={{
                      width: '100%',
                      height: 350,
                    }}
                  />
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>

      <View style={{flex: 2, margin: 20}}>
        <Button
          title="Sign In"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('SignInScreen')}
        />
        <Button
          title="Create an account"
          buttonStyle={{
            ...parameters.styledButton,
            backgroundColor: 'transparent',
            marginTop: 20,
          }}
          titleStyle={{...parameters.buttonTitle, color: colors.buttons}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.buttons,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
