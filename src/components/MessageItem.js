import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import firebase, {firestore} from '../firebase/Firebase';
import {Strings, Constants} from '../const';
import {Color} from '../utils';
function MessageItem({item, onPress}) {
  const userID = firebase.auth().currentUser.uid;
  const isUser = userID === item.senderId;
  function messageView() {
    if (userID === item.senderId) {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.othersMessageContainerView}>
          <Text style={[styles.senderName, {textAlign: 'right'}]}>
            {item.senderEmail}
          </Text>
          <Text style={[styles.message, {textAlign: 'right'}]}>
            {item.message}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.myMessageContainerView}>
          <Text style={styles.senderName}> {item.senderEmail}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </TouchableOpacity>
      );
    }
  }

  return messageView();
}

const styles = StyleSheet.create({
  othersMessageContainerView: {
    backgroundColor: Color.uaStudiosGreen,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  myMessageContainerView: {
    backgroundColor: Color.orange,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    margin: 5,
    padding: 10,
  },
  senderName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  message: {
    color: Color.white,
    fontSize: 14,
  },
});

export default MessageItem;
