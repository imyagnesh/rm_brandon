import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import CText from '../CText';

const CButton = ({
  title,
  loading,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  style,
  onPress,
  ...props
}) => {
  console.log(loading);
  return (
    <RectButton
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: loading ? 'gray' : 'blue',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4,
        paddingVertical: 8,
        marginHorizontal: 8,
        ...style,
      }}
      onPress={e => {
        if (!loading) {
          onPress(e);
        }
      }}
      {...props}>
      {loading && <ActivityIndicator size="small" color="#fff" animating />}
      {LeftIcon && <LeftIcon />}
      <CText variant="button" style={{paddingHorizontal: 8, color: '#fff'}}>
        {title?.toUpperCase()}
      </CText>
      {RightIcon && <RightIcon />}
    </RectButton>
  );
};

export default CButton;
