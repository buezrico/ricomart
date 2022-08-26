import React, {useEffect} from 'react';
import {LogBox, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  // useEffect(() => {
  //   LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Helvetica',
    backgroundColor: 'white',
  },
});
