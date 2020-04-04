/* eslint-disable no-undef */
import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {CustomTextField, Button} from '../components';
import {Strings} from '../const';
import Utility from '../utils/Utility';
import firebase, {firestore} from '../firebase/Firebase';
function AddGroupScreen({navigation}) {
  const [groupName, setGroupName] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [loading, setLoading] = useState(false);
  const validateField = () => {
    const isValidField = Utility.isValidField(groupName);
    isValidField ? setFieldError('') : setFieldError(Strings.GroupNameEmpty);
    return isValidField;
  };
  function createGroupToFireBase() {
    setLoading(true);
    const groupsRef = firestore.collection('groups').doc();
    const userID = firebase.auth().currentUser.uid;
    groupsRef
      .set({
        groupID: groupsRef.id,
        groupName: groupName,
        userID: userID,
      })
      .then(function (docRef) {
        setLoading(false);
        console.log('Document written with ID:', groupsRef.id);
        addMembersOfChatToFirebase(groupsRef.id, userID);
      })
      .catch(function (error) {
        Alert.alert(error.message);
        setLoading(false);
        console.error('error adding document: ', error);
      });
  }
  function addMembersOfChatToFirebase(groupId, userID) {
    const membersRef = firestore
      .collection('members')
      .doc(groupId)
      .collection('member')
      .doc();
    membersRef
      .set({
        userID: userID,
      })
      .then(function (docRef) {
        navigation.goBack();
      })
      .catch(function (error) {
        setLoading(false);
        console.error('Error adding document: ', error);
      });
  }
  const performCreateGroup = () => {
    const isValidField = validateField();
    if (isValidField) {
      createGroupToFireBase();
    }
  };
  return (
    <View style={styles.container}>
      <CustomTextField
        term={groupName}
        error={fieldError}
        placeHolder={Strings.EnterYourGroupName}
        onTermChange={(newGroupName) => setGroupName(newGroupName)}
        onValidateTextField={validateField}
      />

      <Button
        title={Strings.CreateGroup}
        onPress={performCreateGroup}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddGroupScreen;
