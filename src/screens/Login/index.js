import React from 'react';
import {View, Text, Button} from 'react-native';
import CText from '../../components/CText';
import CTextInput from '../../components/cTextInput';

const index = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <CText variant="h1" style={{color: 'red'}} allowFontScaling={true}>
        Login Screen
      </CText>
      <CTextInput error placeholder="Username" />
      <CTextInput placeholder="Password" />
    </View>
  );
};

export default index;
