import React, {useCallback, useMemo, useState} from 'react';
import {
  ActionSheetIOS,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from '../../screens/Modal';

const useUploadImage = () => {
  const [photo, setPhoto] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSelectImage = useCallback(response => {
    setPhoto(response);
    setIsModalVisible(false);
  }, []);

  const options = useMemo(
    () => ({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }),
    [],
  );

  const openActionSheet = useCallback(() => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Take Photo...', 'Choose From Library...'],
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          launchCamera(options, onSelectImage);
        } else if (buttonIndex === 2) {
          launchImageLibrary(options, onSelectImage);
        }
      },
    );
  }, [onSelectImage, options]);

  return {
    openActionSheet,
    photo,
    isModalVisible,
    setIsModalVisible,
    onSelectImage,
    options,
  };
};

export default useUploadImage;
