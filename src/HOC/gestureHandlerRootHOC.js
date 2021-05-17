import React from 'react';
import {Text} from 'react-native';
import {gestureHandlerRootHOC, RectButton} from 'react-native-gesture-handler';

export default gestureHandlerRootHOC(function GestureExample(data) {
  console.log(data);
  return (
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
  );
});
