import React from 'react';
import {Text, View} from 'react-native';
import styles from './Login.screen.styles';

interface LoginScreenProps {}

/**  */
const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
