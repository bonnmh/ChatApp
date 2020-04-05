import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {ButtonWithBackground, GroupsItem, TextCmp} from '../components';
import {IDs} from './IDs';
import firebase, {firestore} from '../firebase/Firebase';
import {Icons} from '../assets';

function GroupsScreen({navigation}) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate(IDs.AddGroupScreen);
          }}
          image={Icons.add}
        />
      ),
      headerLeft: () => {
        <ButtonWithBackground onPress={() => {}} image={Icons.add} />;
      },
    });
  });

  useEffect(() => {
    getChats();
  }, []);

  function getChats() {
    const db = firestore;
    var groupArray = [];
    setLoading(true);
    try {
      db.collection('groups').onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
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
    } catch (error) {
      alert('er');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          ListHeaderComponent={() => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(IDs.TestFirebase);
              }}>
              <TextCmp>ok</TextCmp>
            </TouchableOpacity>
          )}
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
        <ActivityIndicator size="large" color="red" />
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
