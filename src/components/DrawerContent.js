import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button} from '@rneui/themed';
import Icon from 'react-native-ico';
import {colors} from '../global/styles';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../contexts/authContext';

export default function DrawerContent(props) {
  const {dispatchSignedIn} = useContext(SignInContext);

  async function signOut() {
    try {
      auth()
        .signOut()
        .then(() => {
          console.log('USER SIGNED OUT');
          dispatchSignedIn({
            type: 'UPDATE_SIGN_IN',
            payload: {userToken: null},
          });
        });
    } catch (error) {
      Alert.alert(error.code);
    }
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 20,
              paddingHorizontal: 10,
              backgroundColor: colors.buttons,
            }}>
            <Avatar
              rounded
              avatarStyle={{
                borderWidth: 4,
                borderColor: colors.white,
              }}
              source={require('../../assets/images/featured_items/hublot.jpg')}
              size={75}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{color: colors.white, fontWeight: 'bold', fontSize: 20}}>
                Kelly Cowel
              </Text>
              <Text
                numberOfLines={1}
                style={{color: colors.white, fontSize: 14, fontWeight: 'bold'}}>
                indianajones@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
              backgroundColor: colors.grey2,
            }}>
            <Shortcut
              iconName="shopping-cart"
              iconGroup="ui-interface"
              badgeValue={20}
              shortcutTitle="Cart"
            />
            <Text>•</Text>
            <Shortcut
              iconName="mark-as-favorite-star"
              iconGroup="material-design"
              badgeValue={1}
              shortcutTitle="Favorite Shops"
            />
            <Text>•</Text>
            <Shortcut
              iconName="heart-outline-shape"
              iconGroup="coolicons"
              badgeValue={1}
              shortcutTitle="  Saved Items"
            />
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          labelStyle={{fontSize: 15, fontWeight: 'bold'}}
          icon={({color, size}) => (
            <Icon
              name="credit-card"
              group="miscellaneous"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          labelStyle={{fontSize: 15, fontWeight: 'bold'}}
          icon={({color, size}) => (
            <Icon
              name="label"
              group="universalicons"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          labelStyle={{fontSize: 15, fontWeight: 'bold'}}
          icon={({color, size}) => (
            <Icon
              name="settings"
              group="font-awesome"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          labelStyle={{fontSize: 15, fontWeight: 'bold'}}
          icon={({color, size}) => (
            <Icon
              name="help-round-button"
              group="material-design"
              color={color}
              size={size}
            />
          )}
        />

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: colors.grey4,
            backgroundColor: colors.grey5,
            marginTop: 10,
            padding: 15,
            paddingLeft: 20,
          }}>
          <View>
            <Text style={{color: colors.grey2, fontSize: 18}}>Preferences</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, color: colors.grey1}}>
              Dark Mode
            </Text>
            <View style={{}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        onPress={() => signOut()}
        label="Sign Out"
        labelStyle={{fontSize: 15, fontWeight: 'bold'}}
        icon={({color, size}) => (
          <Icon
            name="exit-to-app-button"
            group="material-design"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
}

const Shortcut = props => (
  <TouchableOpacity activeOpacity={0.8} style={{alignItems: 'center'}}>
    <Icon
      name={props.iconName}
      group={props.iconGroup}
      height={25}
      width={25}
      color={colors.headerText}
      badge={{
        value: `${props.badgeValue}`,
        fontSize: 180,
        position: 'top_right',
        radius: 150,
      }}
    />
    <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 13}}>
      {props.shortcutTitle}
    </Text>
  </TouchableOpacity>
);
