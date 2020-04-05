import React from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';
import Constants from '../const/Constants';
import {Color} from '../utils';
import {normalize} from '../utils/Normalize';

const PasswordTextField = ({
  term,
  placeHolder,
  onTermChange,
  onValidatePasswordField,
  error,
}) => {
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          secureTextEntry
          style={styles.TextField}
          placeholder={placeHolder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidatePasswordField}
        />
      </View>
    </View>
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
});

export default PasswordTextField;
