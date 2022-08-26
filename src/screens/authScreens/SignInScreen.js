import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, parameters} from '../../global/styles';
import Header from '../../components/Header';

import * as Animatable from 'react-native-animatable';
import {Button} from '@rneui/themed';
import Icon from 'react-native-ico';

export default function SignInScreen({navigation}) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header
        title="MY ACCOUNT"
        type="left-arrow-key"
        navigation={navigation}
      />

      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{marginVertical: 20}}>
          <Text
            style={{color: colors.buttons, fontSize: 25, fontWeight: 'bold'}}>
            Sign-In
          </Text>
        </View>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            placeholderTextColor={colors.grey3}
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.grey3}
            style={{
              width: '80%',
              color: colors.grey1,
            }}
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={2000}>
            <Icon
              name="eye-with-a-diagonal-line-interface-symbol-for-invisibility"
              group="font-awesome"
              color={colors.grey3}
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>

        <View style={{margin: 20}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('DrawerNavigator')}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 50, marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: colors.grey1}}>
            OR
          </Text>
        </View>

        <View style={{margin: 20}}>
          <Button
            buttonStyle={{
              ...styles.socialButton,
              backgroundColor: '#4267B2',
              marginBottom: 20,
            }}
            titleStyle={{fontSize: 18}}
            icon={
              <Icon
                name="facebook-letter-logo"
                color="white"
                group="coolicons"
                style={{marginRight: 10}}
              />
            }
            title="Sign In With Facebbok"
          />
          <Button
            buttonStyle={{...styles.socialButton, backgroundColor: '#db4a39'}}
            titleStyle={{fontSize: 18}}
            icon={
              <Icon
                name="google-symbol"
                group="material-design"
                color="white"
                style={{marginRight: 10}}
              />
            }
            title="Sign In With Google"
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.text1}>Don't have an account?</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={{color: colors.buttons, fontSize: 20}}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey2,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 20,
    color: colors.grey1,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  socialButton: {
    borderRadius: 15,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
