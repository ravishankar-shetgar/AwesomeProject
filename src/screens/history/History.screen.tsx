import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import STRINGS from '../../common/strings';
import CText from '../../components/CText/CText.view';
import {getGamesHistory, getUserName} from '../../redux/selectors';
import styles from './History.screen.styles';

interface HistoryScreenProps {}

/**  */
const HistoryScreen: React.FC<HistoryScreenProps> = props => {
  const {} = props;

  const gamesHistory = useSelector(getGamesHistory);
  const userName = useSelector(getUserName);

  const gamesWonByComputer = gamesHistory.filter(
    item => item.winner === 'COMPUTER' && item.userName === userName,
  ).length;
  const gamesWonByPlayer = gamesHistory.filter(
    item => item.winner === 'P1' && item.userName === userName,
  ).length;

  return (
    <View style={styles.container}>
      <CText>{STRINGS.gameWinsHistory}</CText>

      <View style={styles.vspace} />

      <CText variant="Header3">
        {STRINGS.gamesWonBy + 'COMPUTER : ' + gamesWonByComputer}
      </CText>
      <View style={styles.vspace} />

      <CText variant="Header3">
        {STRINGS.gamesWonBy + userName + ': ' + gamesWonByPlayer}
      </CText>

      <View style={styles.vspace} />
      <View style={styles.vspace} />

      <ScrollView>
        {gamesHistory
          .filter(item => item.userName === userName)
          .map(item => (
            <View style={styles.item} key={item.id}>
              <CText variant="Header4">
                {STRINGS.winnerIs + item.winner + '\nDate: ' + item.date}
              </CText>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
