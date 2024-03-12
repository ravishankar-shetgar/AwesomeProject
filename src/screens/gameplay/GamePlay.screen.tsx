import React from 'react';
import {Text, View} from 'react-native';
import styles from './GamePlay.screen.styles';

interface GamePlayScreenProps {}

/**  */
const GamePlayScreen: React.FC<GamePlayScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>GamePlayScreen</Text>
    </View>
  );
};

export default GamePlayScreen;
