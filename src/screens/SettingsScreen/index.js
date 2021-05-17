import React from 'react';
import {View, PixelRatio, useWindowDimensions} from 'react-native';
import UploadImage from '../../components/UploadImage';
import CText from '../../components/CText';

const SettingsScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <CText>Settings Page</CText>
      <UploadImage />
      <CText>Current Font Scale is:</CText>
      <CText>{PixelRatio.getFontScale()}</CText>
      <CText>{height}</CText>
      <CText>{width}</CText>
    </View>
  );
};

export default SettingsScreen;
