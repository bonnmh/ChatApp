import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Strings, Constants} from '../const';
import {Color} from '../utils';
import {TextCmp} from '.';
import {normalize} from '../utils/Normalize';

const MessageFieldView = ({
  term,
  placeHolder,
  onTermChange,
  onValidateTextField,
  error,
  onSubmit,
  isJoined,
}) => {
  return (
    <View style={styles.fieldView}>
      <TextInput
        multiline
        autoCorrect={false}
        style={styles.inp}
        placeholder={placeHolder}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onValidateTextField}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <TextCmp style={styles.txt}>{Strings.Send}</TextCmp>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
  },
  inp: {
    flex: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  btn: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'red',
    fontSize: normalize(18),
  },
});

export default MessageFieldView;
