import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 75,
    width: 75,
    borderRadius: 10,
    margin: 5,
    borderColor: COLORS.grey200,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCoin: {
    borderColor: COLORS.lightBlue,
    backgroundColor: COLORS.lightBlue200,
  },
});

export default styles;
