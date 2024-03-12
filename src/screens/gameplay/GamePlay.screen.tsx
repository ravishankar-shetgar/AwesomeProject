import {NavigationProp} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import STRINGS from '../../common/strings';
import {getRandomUuid} from '../../common/utils';
import Button from '../../components/Button/Button.view';
import CTextView from '../../components/CText/CText.view';
import Coin from '../../components/Coin/Coin.view';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {GameDetails} from '../../redux/history/history.reducer.types';
import {getUserName} from '../../redux/selectors';
import {addGameToHistoryAction} from '../../saga/gamePlayScreen.saga';
import styles from './GamePlay.screen.styles';

interface GamePlayScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
}

const MAX_ALLOWED_SELECTION_COUNT = 4;
const COINS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

export type PlayerType = 'COMPUTER' | 'P1';

/**  */
const GamePlayScreen: React.FC<GamePlayScreenProps> = props => {
  const {navigation} = props;

  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>('P1');
  const [currentSelectedCoins, setCurrentSelectedCoins] = useState<number[]>(
    [],
  );
  const [availableCoins, setAvailableCoins] = useState(COINS);

  useEffect(() => {
    if (currentPlayer === 'COMPUTER') {
      let aISelection = (availableCoins.length - 1) % 5;

      if (aISelection === 0) {
        aISelection = 1 + Math.random() * 10 * 4;
      }

      const temp = [...availableCoins];

      setTimeout(() => {
        setCurrentPlayer('P1');
        setAvailableCoins(temp.slice(0, availableCoins.length - aISelection));
      }, 1500);
    }
  }, [currentPlayer, availableCoins]);

  const onPressCoin = (key: number) => {
    let temp = [...currentSelectedCoins];
    if (currentSelectedCoins.includes(key)) {
      temp = temp.filter(item => item !== key);
      setCurrentSelectedCoins(temp);
    } else if (currentSelectedCoins.length < MAX_ALLOWED_SELECTION_COUNT) {
      setCurrentSelectedCoins([...temp, key]);
    }
  };

  const onPressNext = () => {
    const isLastCoin =
      availableCoins.length - currentSelectedCoins.length === 0;

    if (isLastCoin) {
      const gameDetails: GameDetails = {
        id: getRandomUuid(),
        winner: currentPlayer === 'COMPUTER' ? 'P1' : 'COMPUTER',
        loser: currentPlayer,
        date: moment().format('DD MMM YYYY'),
        userName,
      };

      dispatch(addGameToHistoryAction(gameDetails));
      navigation.navigate('GameEndScreen', gameDetails);
    } else {
      let temp = availableCoins.filter(
        item => !currentSelectedCoins.includes(item),
      );
      setAvailableCoins(temp);
      setCurrentPlayer(currentPlayer === 'P1' ? 'COMPUTER' : 'P1');
      setCurrentSelectedCoins([]);
    }
  };

  return (
    <View style={styles.container}>
      <CTextView variant="Header4">
        {currentPlayer === 'P1'
          ? userName + STRINGS.playersTurn
          : currentPlayer + STRINGS.playersTurn}
      </CTextView>

      {currentPlayer === 'COMPUTER' ? <ActivityIndicator size={40} /> : null}

      <View style={styles.vspace} />

      <CTextView variant="Header4">
        {STRINGS.coinsRemaining + availableCoins.length}
      </CTextView>

      <View style={styles.vspace} />

      <View style={styles.coinsView}>
        {availableCoins.map(coin => (
          <TouchableOpacity
            disabled={currentPlayer === 'COMPUTER'}
            activeOpacity={0.6}
            key={coin}
            onPress={() => onPressCoin(coin)}>
            <Coin isSelected={currentSelectedCoins.includes(coin)} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.vspace} />
      <View style={styles.flexSpace} />

      <Button
        onPress={onPressNext}
        title={STRINGS.nextTurn}
        variant={currentSelectedCoins.length > 0 ? 'enabled' : 'disabled'}
      />
    </View>
  );
};

export default GamePlayScreen;
