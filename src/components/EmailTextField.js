import React from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';
import Color from '../utils/Colors';
import Constants from '../const/Constants';
import {Icons} from '../assets';
import {normalize} from '../utils/Normalize';

const EmailTextField = ({
  term,
  placeHolder = 'enter',
  OnTermChange,
  onValidateEmailAddress,
  error,
}) => {
  return (
    <>
      <View style={styles.containerErr}>
        <Text style={styles.error}>{error}</Text>
      </View>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.TextField}
          placeholder={placeHolder}
          value={term}
          onChangeText={OnTermChange}
          onEndEditing={onValidateEmailAddress}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: normalize(14),
    flex: 1,
  },
  TextFieldView: {
    width: Constants.screenWidth * 0.8,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Color.black,
    borderWidth: 0.5,
    backgroundColor: Color.smoke,
    minHeight: 50,
    paddingHorizontal: 10,
  },
  ErrorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: -5,
    marginHorizontal: 20,
  },
  error: {
    color: 'red',
  },
  containerErr: {
    width: Constants.screenWidth * 0.8,
  },
});

export default EmailTextField;
