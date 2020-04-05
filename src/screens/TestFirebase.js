import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextCmp} from '../components';
import firebase, {firestore} from '../firebase/Firebase';

const TestFirebase = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          let db = firestore;
          //   db.collection('cities')
          //     .doc('LA')
          //     .set({
          //       name: 'Los Angeles',
          //       state: 'CA',
          //       country: 'USA',
          //     })
          //     .then(function () {
          //       console.log('Document successfully written!');
          //     })
          //     .catch(function (error) {
          //       console.error('Error writing document: ', error);
          //     });
          //   let cityRef = db.collection('cities').doc('LA');

          //   let setWithMerge = cityRef
          //     .set({
          //       capital: true,
          //       ten: 'bon',
          //       tuoi: '34',
          //     })
          //     .then((e) => {
          //       console.log(e);
          //     });
          let docData = {
            stringExample: 'Hello world!',
            booleanExample: true,
            numberExample: 3.14159265,
            dateExample: firebase.firestore.Timestamp.fromDate(
              new Date('December 10, 1815'),
            ),
            arrayExample: [5, true, 'hello'],
            nullExample: null,
            objectExample: {
              a: 5,
              b: {
                nested: 'foo',
              },
            },
          };
          db.collection('data')
            .doc('one')
            .set(docData)
            .then(function () {
              console.log('Document successfully written!');
            });
        }}>
        <TextCmp>click</TextCmp>
      </TouchableOpacity>
      <Text>add</Text>
    </View>
  );
};

export default TestFirebase;

const styles = StyleSheet.create({});
