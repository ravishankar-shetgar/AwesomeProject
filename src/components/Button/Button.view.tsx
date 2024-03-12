import React from 'react';
import {TextProps, TouchableOpacity} from 'react-native';
import COLORS from '../../common/colors';
import CText from '../CText/CText.view';
import styles from './Button.styles';

export type ButtonVariants = 'enabled' | 'disabled';

export interface ButtonComponentProps {
  variant?: ButtonVariants;
  textProps?: TextProps;
  title: string;
  onPress: () => void;
}

const Button = (props: ButtonComponentProps) => {
  const {title, variant = 'enabled', onPress} = props;

  let buttonStyles = {};

  switch (variant) {
    case 'enabled':
      buttonStyles = styles.filledButtonContainer;
      break;
    case 'disabled':
      buttonStyles = styles.disabledButtonContainer;
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={variant === 'disabled'}
      style={buttonStyles}>
      <CText variant="Header5" {...props.textProps} color={COLORS.white}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
