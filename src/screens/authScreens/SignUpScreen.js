import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {colors, parameters} from '../../global/styles';
import Header from '../../components/Header';
import {Formik} from 'formik';
import * as Animatable from 'react-native-animatable';
import {Button} from '@rneui/themed';
import Icon from 'react-native-ico';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);

  const initialValues = {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  };

  async function signUp(values) {
    const {email, password} = values;

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User Account Created');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email already exist');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Invalid Email');
      } else {
        Alert.alert(error.code);
      }
    }
  }

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="always">
        <Header
          title="MY ACCOUNT"
          type="left-arrow-key"
          navigation={navigation}
        />

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View style={{marginVertical: 10}}>
            <Text
              style={{color: colors.buttons, fontSize: 25, fontWeight: 'bold'}}>
              Sign-Up
            </Text>
          </View>
          <Text style={styles.text1}>New on Ricomart?</Text>
        </View>

        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            signUp(values);
          }}>
          {props => (
            <View>
              <View style={{marginTop: 20}}>
                <View>
                  <TextInput
                    style={styles.TextInput1}
                    placeholder="First Name"
                    placeholderTextColor={colors.grey3}
                    onChangeText={props.handleChange('firstName')}
                    value={props.values.firstName}
                    // autoFocus={true}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput1}
                    placeholder="Last Name"
                    placeholderTextColor={colors.grey3}
                    onChangeText={props.handleChange('lastName')}
                    value={props.values.lastName}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput1}
                    placeholder="Username"
                    placeholderTextColor={colors.grey3}
                    onChangeText={props.handleChange('username')}
                    value={props.values.username}
                  />
                </View>

                <View style={styles.TextInput2}>
                  <Icon
                    name="new-email-black-back-envelope-symbol-of-interface"
                    group="coolicons"
                    color={colors.grey3}
                    style={{marginRight: 10}}
                  />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={colors.grey3}
                    style={{
                      width: '100%',
                      color: colors.grey1,
                    }}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </View>
                <View style={styles.TextInput2}>
                  <Icon
                    name="nigeria"
                    group="flags"
                    color={colors.grey3}
                    style={{marginRight: 10}}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.grey2,
                      marginRight: 10,
                    }}>
                    +234
                  </Text>
                  <TextInput
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                    placeholderTextColor={colors.grey3}
                    style={{
                      width: '100%',
                      color: colors.grey1,
                    }}
                    onChangeText={props.handleChange('phoneNumber')}
                    value={props.values.phoneNumber}
                  />
                </View>

                <View style={styles.TextInput2}>
                  <Icon
                    name="lock-rectangular-padlock-shape"
                    group="universalicons"
                    color={colors.grey3}
                    style={{marginRight: 10}}
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.grey3}
                    style={{
                      width: '80%',
                      color: colors.grey1,
                    }}
                    onFocus={() => {
                      setTextInput2Focused(false);
                    }}
                    onBlur={() => {
                      setTextInput2Focused(true);
                    }}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
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
              </View>

              <View style={{alignItems: 'center', margin: 5}}>
                <Text style={styles.text1}>
                  By creating an account, you agree with
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text1}>our {''}</Text>
                  <Text style={{...styles.text1, color: 'green'}}>
                    Terns &amp; Conditions {''}
                  </Text>
                  <Text style={styles.text1}>and </Text>
                  <Text style={styles.text1}>Privacy Statement</Text>
                </View>
              </View>

              <View style={{margin: 20}}>
                <Button
                  title="SIGN UP"
                  buttonStyle={parameters.styledButton}
                  titleStyle={parameters.buttonTitle}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text style={{...styles.text1, marginRight: 10, fontSize: 20}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: colors.buttons, fontSize: 25}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 20,
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
