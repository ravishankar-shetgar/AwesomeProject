import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {FONTS} from '../../common/fonts';

const styles = StyleSheet.create({
  header1: {
    fontFamily: FONTS.Bold,
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.blue300,
  },
  header2: {
    fontFamily: FONTS.Bold,
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.blue300,
  },
  header3: {
    fontFamily: FONTS.SemiBold,
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.blue300,
  },
  header4: {
    fontFamily: FONTS.Medium,
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.blue300,
  },
  header5: {
    fontFamily: FONTS.Regular,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.blue300,
  },
  header6: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.blue300,
  },
  header7: {
    fontFamily: FONTS.Regular,
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.blue300,
  },
});

export default styles;
