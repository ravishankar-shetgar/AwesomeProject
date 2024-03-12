import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import STRINGS from '../../common/strings';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {logoutAction} from '../../saga/gamePlayScreen.saga';
import styles from './Home.screen.styles';

interface HomeScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const onPressStart = () => {
    navigation.navigate('GamePlayScreen');
  };

  const onPressLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <View style={styles.container}>
      <CText>{STRINGS.startAGame}</CText>

      <View style={styles.vspace} />
      <CText variant="Header4">{STRINGS.instructions}</CText>
      <View style={styles.vspace} />

      <View style={styles.vspace} />

      <Button onPress={onPressStart} title={STRINGS.start} variant="enabled" />

      <View style={styles.vspace} />
      <Button
        onPress={onPressLogout}
        title={STRINGS.logout}
        variant="enabled"
      />
    </View>
  );
};

export default HomeScreen;
