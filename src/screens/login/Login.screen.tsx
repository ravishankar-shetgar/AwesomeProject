import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../common/colors';
import STRINGS from '../../common/strings';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import {getLoginErrorMessage} from '../../redux/selectors';
import {loginUserAction} from '../../saga/loginScreen.saga';
import styles from './Login.screen.styles';

interface LoginScreenProps {}

/**  */
const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {} = props;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loginErrorMessage = useSelector(getLoginErrorMessage);

  const enableLoginButton =
    userName.trim().length > 0 && password.trim().length > 0;

  const onPressLogin = () => {
    dispatch(
      loginUserAction({
        userName: userName,
        password: password,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <CText>{STRINGS.coinPicker}</CText>
      <View style={styles.vspace} />
      <View style={styles.vspace} />

      <CText variant="Header3">{STRINGS.loginToPlayGame}</CText>

      <View style={styles.vspace} />

      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder={STRINGS.enterUserId}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder={STRINGS.enterPassword}
      />

      {loginErrorMessage.length > 0 ? (
        <>
          <CText variant="Header5" color={COLORS.errorRed}>
            {loginErrorMessage}
          </CText>
          <View style={styles.vspace} />
        </>
      ) : null}

      <View style={styles.vspace} />
      <Button
        onPress={onPressLogin}
        title={STRINGS.login}
        variant={enableLoginButton ? 'enabled' : 'disabled'}
      />
    </View>
  );
};

export default LoginScreen;
