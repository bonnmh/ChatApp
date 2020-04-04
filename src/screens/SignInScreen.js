import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  EmailTextField,
  PasswordTextField,
  DismissKeyboard,
} from '../components';
import Strings from '../const/String';
import Utility from '../utils/Utility';
import Constants from '../const/Constants';
import {Color} from '../utils';
import {images} from '../const';

function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const onPressJoin = () => {
    alert(1);
  };
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <SafeAreaView>
            <Image source={images.logo} style={styles.logo} />
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
        <Button title={Strings.Join} onPress={onPressJoin} />
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
    backgroundColor: Color.theme,
  },
});
