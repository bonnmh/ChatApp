import React from 'react';
import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Color from '../utils/Colors';
import {TextCmp} from '.';
import {Constants} from '../const';

const Button = (props) => {
  const {
    title = 'Enter',
    style = {},
    textStyle = {},
    onPress,
    loading = false,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <TextCmp style={[styles.text, textStyle]}> {title}</TextCmp>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: Color.mainChat,
    shadowColor: Color.mainChat,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
    elevation: 2,
    width: Constants.screenWidth * 0.8,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Color.white,
  },
});

export default Button;
