import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const CText = ({children, variant, style, ...props}) => {
  return (
    <Text
      style={[styles[variant], style]}
      allowFontScaling={true}
      maxFontSizeMultiplier={1.3}
      {...props}>
      {children}
    </Text>
  );
};

export default CText;
