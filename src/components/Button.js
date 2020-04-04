import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Color from '../utils/Colors';
import {TextCmp} from '.';

const Button = (props) => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <TextCmp style={[styles.text, textStyle]}> {title}</TextCmp>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: Color.uaStudiosGreen,
    shadowColor: Color.uaStudiosGreen,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Color.white,
  },
});

export default Button;
