import React from 'react';
import {View} from 'react-native';
import {CoinIcon} from '../../common/icons';
import styles from './Coin.styles';

interface CoinProps {
  isSelected: boolean;
}

/**  */
const Coin: React.FC<CoinProps> = props => {
  const {isSelected} = props;

  return (
    <View style={[styles.container, isSelected ? styles.selectedCoin : {}]}>
      <CoinIcon height={60} width={60} />
    </View>
  );
};

export default Coin;
