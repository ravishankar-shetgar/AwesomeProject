import React from 'react';
import {Text, View} from 'react-native';
import styles from './History.screen.styles';

interface HistoryScreenProps {}

/**  */
const HistoryScreen: React.FC<HistoryScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

export default HistoryScreen;
