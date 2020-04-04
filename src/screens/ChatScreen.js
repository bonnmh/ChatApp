import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import firebase, {firestore} from '../firebase/Firebase';
import {Logg} from '../utils';
import {DismissKeyboard, MessageFieldView, MessageItem} from '../components';
import {Strings, Constants} from '../const';

function ChatScreen({route, navigation}) {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const {item} = route.params;
  const userID = firebase.auth().currentUser.uid;
  useEffect(() => {
    Logg.info(
      'item',
      item,
      'userID',
      userID,
      'firebase.auth()',
      firebase.auth(),
    );
    getMessages();
  }, []);
  function getMessages() {
    const db = firestore;
    var messages = [];

    db.collection('message')
      .doc(item.groupID)
      .collection('messages')
      .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
            console.log('New Message: ', change.doc.data());
            messages.push(change.doc.data());
          }
          if (change.type === 'modified') {
            console.log('Modified Message', change.doc.data());
          }
          if (change.type === 'removed') {
            console.log('Removed Message:', change.doc.data());
          }
          setMessageList(messages);
        });
      });
  }
  function sendMessagesToChat() {
    if (message.trim().length === 0) return;
    const messageRef = firestore
      .collection('message')
      .doc(item.groupID)
      .collection('messages')
      .doc();
    const userEmail = firebase.auth().currentUser.email;
    try {
      messageRef
        .set({
          messageID: messageRef.id,
          message: message,
          senderId: userID,
          senderEmail: userEmail,
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', messageRef.id);
          setMessage('');
        })
        .catch(function (error) {
          console.log('Error:', error);
        });
    } catch (error) {
      Logg.info(error);
    }
  }

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}>
        <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={messageList}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return <MessageItem onPress={() => {}} item={item} />;
            }}
          />

          <MessageFieldView
            term={message}
            placeHolder={Strings.typeYourMessage}
            onTermChange={(message) => setMessage(message)}
            onSubmit={sendMessagesToChat}
          />
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatList: {
    marginBottom: 30,
    flex: 0.9,
  },
  //   messageFieldView: {
  //     flex: 0.1,
  //   },
});

export default ChatScreen;
