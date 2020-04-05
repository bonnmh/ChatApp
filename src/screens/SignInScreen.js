import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import firebase from '../firebase/Firebase';
import {
  Button,
  EmailTextField,
  PasswordTextField,
  DismissKeyboard,
} from '../components';
import Strings from '../const/String';
import Utility from '../utils/Utility';
import Constants from '../const/Constants';
import {Color, Logg} from '../utils';
import {IDs} from './IDs';
import {Icons} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {NavigatorService} from '../utils/services/navigator';

function SignInScreen({}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('Test@gmail.com');
  const [password, setPassword] = useState('123456');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const validateEmailAddress = () => {
    const isValidEmail = Utility.isEmailValid(email);
    isValidEmail
      ? setEmailError('')
      : setEmailError(Strings.InvalidEmailAddress);
    return isValidEmail;
  };
  const validatePasswordField = () => {
    const isValidField = Utility.isValidField(password);
    isValidField
      ? setPasswordError('')
      : setPasswordError(Strings.PasswordFieldEmpty);
    return isValidField;
  };
  const performAuth = () => {
    const isValidEmail = validateEmailAddress();
    const isValidPassword = validatePasswordField();
    if (isValidEmail && isValidPassword) {
      setEmailError('');
      setPasswordError('');
      registration();
    }
  };
  const registration = () => {
    try {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{name: IDs.GroupScreens}],
          });
          //   NavigatorService._push(IDs.GroupScreens);
        })
        .catch((e) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              navigation.reset({
                index: 0,
                routes: [{name: IDs.GroupScreens}],
              });
            })
            .catch((e) => {
              Logg.error(e);
            });
          Logg.error(e);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      Logg.error(error);
    }
  };
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <SafeAreaView>
            <Image source={Icons.logo} style={styles.logo} />
          </SafeAreaView>
        </View>
        <EmailTextField
          term={email}
          error={emailError}
          placeHolder={Strings.EmailPlaceHolder}
          OnTermChange={(email) => setEmail(email)}
          onValidateEmailAddress={validateEmailAddress}
        />
        <PasswordTextField
          term={password}
          error={passwordError}
          placeHolder={Strings.PasswordPlaceHolder}
          onTermChange={(pass) => setPassword(pass)}
          onValidatePasswordField={validatePasswordField}
        />
        <Button loading={loading} title={Strings.Join} onPress={performAuth} />
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}
export default SignInScreen;
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 0.04 * Constants.screenHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.background,
  },
});
