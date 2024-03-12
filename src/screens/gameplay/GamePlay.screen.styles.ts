import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
    padding: 24,
  },
  coinsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  vspace: {
    height: 12,
  },
  flexSpace: {
    flex: 1,
  },
});

export default styles;
