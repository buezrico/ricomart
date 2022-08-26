import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ico';
import {colors, parameters} from '../global/styles';

export default function Header({type, title, navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Icon
          name={type}
          size={28}
          color={colors.headerText}
          group="material-design"
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    fontFamily: 'Roboto',
  },
});
