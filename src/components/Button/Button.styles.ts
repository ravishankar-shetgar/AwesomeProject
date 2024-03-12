import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  filledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: COLORS.blue,
    alignContent: 'center',
    height: 40,
  },
  disabledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    opacity: 0.8,
    backgroundColor: COLORS.grey300,
    height: 40,
  },
});

export default styles;
