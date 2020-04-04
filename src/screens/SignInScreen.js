import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign</Text>
    </View>
  );
}
export default SignInScreen;
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
