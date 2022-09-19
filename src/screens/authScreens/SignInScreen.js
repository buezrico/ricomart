import React, {useState, useContext} from 'react';
import {
  Alert,
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
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../../contexts/authContext';

export default function SignInScreen({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext);
  const [textInput2Focused, setTextInput2Focused] = useState(false);

  async function signIn(data) {
    try {
      const {password, email} = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log('User Logged In');
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

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

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signIn(values);
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              {/* <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  placeholderTextColor={colors.grey3}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View> */}

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
                    width: '80%',
                    color: colors.grey1,
                  }}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
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
            <View style={{margin: 20, marginTop: 0}}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{color: colors.buttons, fontSize: 20}}>
            Create an account
          </Text>
        </TouchableOpacity>
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
