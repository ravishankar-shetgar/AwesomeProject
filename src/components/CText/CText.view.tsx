import React from 'react';
import {Text as RNText, StyleProp, TextProps, TextStyle} from 'react-native';
import COLORS from '../../common/colors';
import styles from './CText.styles';

/** controls font size and family */
type TextVariants =
  | 'Header1'
  | 'Header2'
  | 'Header3'
  | 'Header4'
  | 'Header5'
  | 'Header6';

interface CTextProps extends TextProps {
  variant?: TextVariants;
  color?: COLORS;
  textProps?: TextProps;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

/** Custom text component with preset font styles */
const CText = (props: CTextProps) => {
  const {children, textProps, variant = 'Header1', color, fontWeight} = props;

  let textStyle: StyleProp<TextStyle>;

  switch (variant) {
    case 'Header1':
      textStyle = styles.header1;
      break;
    case 'Header2':
      textStyle = styles.header2;
      break;
    case 'Header3':
      textStyle = styles.header3;
      break;
    case 'Header4':
      textStyle = styles.header4;
      break;
    case 'Header5':
      textStyle = styles.header5;
      break;
    case 'Header6':
      textStyle = styles.header6;
      break;
    default:
      textStyle = styles.header1;
  }

  return (
    <RNText
      {...textProps}
      style={[
        textStyle,
        color ? {color} : {},
        fontWeight ? {fontWeight: fontWeight} : {},
      ]}>
      {children}
    </RNText>
  );
};

export default React.memo(CText);
