import React from 'react';
import {Image, View, Platform} from 'react-native';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
import CButton from '../cButton';
import UploadImage from './UploadImage';
import useUploadImage from './useUploadImage';

const Index = () => {
  const {
    openActionSheet,
    photo,
    isModalVisible,
    setIsModalVisible,
    onSelectImage,
    loadModal,
    options,
  } = useUploadImage();

  return (
    <View>
      <CButton
        title="Upload Image"
        onPress={() => {
          if (Platform.OS === 'ios') {
            openActionSheet();
          } else {
            setIsModalVisible(true);
          }
        }}
      />
      <UploadImage
        isModalVisible={isModalVisible}
        onSelectImage={onSelectImage}
        options={options}
      />
      {photo && (
        <Image
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(50),
            width: PixelRatio.getPixelSizeForLayoutSize(50),
          }}
          source={{
            uri: photo.uri,
          }}
        />
      )}
    </View>
  );
};

export default Index;
