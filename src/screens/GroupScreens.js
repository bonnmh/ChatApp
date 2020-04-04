import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function GroupScreens() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group</Text>
    </View>
  );
}
export default GroupScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
