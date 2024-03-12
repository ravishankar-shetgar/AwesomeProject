import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
    padding: 24,
  },
  vspace: {
    height: 12,
  },
  item: {
    borderWidth: 1,
    marginBottom: 6,
    padding: 12,
  },
});

export default styles;
