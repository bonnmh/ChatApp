import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../components';
import Strings from '../const/String';
import EmailTextField from '../components/EmailTextField';

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign</Text>
      <Button title={Strings.Join} />
      <EmailTextField />
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
