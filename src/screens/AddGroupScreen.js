import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AddGroupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add</Text>
    </View>
  );
}
export default AddGroupScreen;
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
