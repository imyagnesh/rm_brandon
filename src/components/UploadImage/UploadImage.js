import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

const UploadImage = ({onSelectImage, options, isModalVisible}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <GestureHandlerRootView>
        <View
          style={{
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              paddingVertical: 12,
              paddingHorizontal: 8,
              borderBottomColor: 'blue',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1.1,
                lineHeight: 25,
                color: 'blue',
              }}>
              Select Avtar
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              launchCamera(options, onSelectImage);
            }}>
            <RectButton
              style={{
                paddingVertical: 12,
                paddingHorizontal: 8,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  letterSpacing: 1.1,
                  lineHeight: 25,
                }}>
                Select From Camara...
              </Text>
            </RectButton>
          </TouchableWithoutFeedback>
          <RectButton
            onPress={() => launchImageLibrary(options, onSelectImage)}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 8,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1.1,
                lineHeight: 25,
              }}>
              Select From Library...
            </Text>
          </RectButton>
          <RectButton
            style={{
              paddingVertical: 12,
              paddingHorizontal: 8,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1.1,
                lineHeight: 25,
              }}>
              Cancel
            </Text>
          </RectButton>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default UploadImage;
