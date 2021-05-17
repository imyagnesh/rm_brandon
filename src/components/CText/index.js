import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const CText = ({children, variant, style, ...props}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[styles[variant], {color: colors.text}, style]}
      allowFontScaling={true}
      maxFontSizeMultiplier={1.3}
      {...props}>
      {children}
    </Text>
  );
};

export default CText;
