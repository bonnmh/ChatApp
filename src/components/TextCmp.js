import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {normalize} from '../utils/Normalize';
import Color from '../utils/Colors';

export default (props = {}) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.black,
    // fontFamily: Fonts.Default.Regular,
    fontSize: normalize(19),
  },
});
