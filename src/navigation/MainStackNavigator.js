import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupScreens from '../screens/GroupScreens';
import AddGroupScreen from '../screens/AddGroupScreen';

const Stack = createStackNavigator();

function ChatFolow() {
  return (
    <NavigationContainer>
      <Stack.Navigator name="chat">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="GroupScreens"
          component={GroupScreens}
          options={({navigation, route}) => ({
            title: 'Group',
          })}
        />
        <Stack.Screen
          name="AddGroupScreen"
          component={AddGroupScreen}
          options={({navigation, route}) => ({
            title: 'AddGroup',
          })}
        />
        <Stack.Screen
          name="ChatScreen"
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
