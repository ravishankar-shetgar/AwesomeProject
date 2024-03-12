import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import React from 'react';
import {BackHandler, View} from 'react-native';
import {CelebrationIcon} from '../../common/icons';
import STRINGS from '../../common/strings';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import styles from './GameEnd.screen.styles';

interface GameEndScreenProps {
  route: RouteProp<HomeNavigationStackType, 'GameEndScreen'>;
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const GameEndScreen: React.FC<GameEndScreenProps> = props => {
  const {route, navigation} = props;
  const {params} = route;

  const onPressNewGame = () => {
    navigation?.push('GamePlayScreen');
  };

  // handle hardware back action
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation?.popToTop();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  return (
    <View style={styles.container}>
      <CText>{STRINGS.winnerIs}</CText>

      <CText>{params.winner}</CText>

      <View style={styles.vspace} />
      <View style={styles.vspace} />

      <CelebrationIcon height={250} width={250} />

      <View style={styles.vspace} />
      <View style={styles.vspace} />

      <Button onPress={onPressNewGame} title={STRINGS.startNewGame} />
    </View>
  );
};

export default GameEndScreen;
