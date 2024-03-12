import React from 'react';
import {Text, View} from 'react-native';
import styles from './Home.screen.styles';

interface HomeScreenProps {}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
