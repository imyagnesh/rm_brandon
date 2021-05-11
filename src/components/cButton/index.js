import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import CText from '../CText';

const CButton = ({
  title,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  style,
  ...props
}) => {
  return (
    <RectButton
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4,
        paddingVertical: 8,
        marginHorizontal: 8,
        ...style,
      }}
      {...props}>
      {LeftIcon && <LeftIcon />}
      <CText variant="button" style={{paddingHorizontal: 8, color: '#fff'}}>
        {title?.toUpperCase()}
      </CText>
      {RightIcon && <RightIcon />}
    </RectButton>
  );
};

export default CButton;
