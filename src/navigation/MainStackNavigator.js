import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupScreens from '../screens/GroupScreens';
import AddGroupScreen from '../screens/AddGroupScreen';
import {IDs} from '../screens/IDs';
import {TextCmp} from '../components';

const Stack = createStackNavigator();

function ChatFolow() {
  return (
    <NavigationContainer
      onStateChange={(state) => console.log('New state is', state)}>
      <Stack.Navigator name="chat">
        {/* <Stack.Screen
          name={IDs.SignInScreen}
          component={SignInScreen}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        /> */}
        <Stack.Screen
          name={IDs.GroupScreens}
          component={GroupScreens}
          options={({navigation, route}) => ({
            title: 'Group',
          })}
        />
        <Stack.Screen
          name={IDs.AddGroupScreen}
          component={AddGroupScreen}
          options={({navigation, route}) => ({
            title: 'AddGroup',
          })}
        />
        <Stack.Screen
          name={IDs.ChatScreen}
          component={ChatScreen}
          options={({navigation, route}) => ({
            title: 'Chat',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function MainStackNavigator() {
  return ChatFolow();
}
export default MainStackNavigator;
