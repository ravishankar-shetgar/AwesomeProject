import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {FONTS} from '../../common/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    fontSize: 16,
    fontFamily: FONTS.Regular,
    marginBottom: 12,
    borderRadius: 12,
    borderColor: COLORS.grey300,
  },
  vspace: {
    height: 12,
  },
});

export default styles;
