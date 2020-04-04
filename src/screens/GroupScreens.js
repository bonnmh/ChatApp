import React, {useLayoutEffect, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {ButtonWithBackground, GroupsItem} from '../components';
import {IDs} from './IDs';
import {firestore} from '../firebase/Firebase';
import {images} from '../const';

function GroupsScreen({navigation}) {
  const [groups, setGroups] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate(IDs.AddGroupScreen);
          }}
          image={images.add}
        />
      ),
      headerLeft: () => {
        <ButtonWithBackground onPress={() => {}} image={images.add} />;
      },
    });
  });

  useEffect(() => {
    getChats();
  }, []);

  function getChats() {
    const db = firestore;
    var groupArray = [];

    db.collection('groups').onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type == 'added') {
          console.log('New Group: ', change.doc.data());
          groupArray.push(change.doc.data());
        }
        if (change.type === 'modified') {
          console.log('Modified Group: ', change.doc.data());
        }
        if (change.type === 'removed') {
          console.log('Removed Group', change.doc.data());
        }

        setGroups(groupArray);
      });
    });
  }

  return (
    <View style={styles.container}>
      {groups !== [] ? (
        <FlatList
          data={groups}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return (
              <GroupsItem
                onPress={() => {
                  navigation.navigate(IDs.ChatScreen, {
                    item,
                  });
                }}
                item={item}
              />
            );
          }}
        />
      ) : (
        <ActivityIndicator size="small" color="red" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GroupsScreen;
