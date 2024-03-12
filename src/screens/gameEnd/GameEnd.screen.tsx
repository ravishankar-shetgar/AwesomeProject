import React from 'react';
import {Text, View} from 'react-native';
import styles from './GameEnd.screen.styles';

interface GameEndScreenProps {}

/**  */
const GameEndScreen: React.FC<GameEndScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>GameEndScreen</Text>
    </View>
  );
};

export default GameEndScreen;
