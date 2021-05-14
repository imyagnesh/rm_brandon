import React, {useState} from 'react';
import {View, ActionSheetIOS, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CButton from '../cButton';

const UploadImage = () => {
  const [photo, setPhoto] = useState(null);
  const openActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Take Photo...', 'Choose From Library...'],
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            response => {
              console.log(response);
              setPhoto(response);
            },
          );
        } else if (buttonIndex === 2) {
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            response => {
              console.log(response);
              setPhoto(response);
            },
          );
        }
      },
    );
  };
  return (
    <View>
      <CButton title="Upload Image" onPress={openActionSheet} />
      {photo && (
        <Image
          style={{height: 100, width: 100}}
          source={{
            uri: photo.uri,
          }}
        />
      )}
    </View>
  );
};

export default UploadImage;
