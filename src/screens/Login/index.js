import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import CText from '../../components/CText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import fields from './fields';
import Form from '../../components/Form';
import axios from '../../utils/axios';

const index = ({navigation}) => {
  const onSubmit = async (values, hanlders) => {
    try {
      const res = await axios.post('auth/local', values);
      await AsyncStorage.setItem('token', JSON.stringify(res.data));
      navigation.navigate('Registration');
    } catch (error) {
      hanlders.setFieldError('server', error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'ios'}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CText variant="h1" allowFontScaling={true} numberOfLines={1}>
            Login
          </CText>
        </View>
        <View style={{flex: 3}}>
          <Form fields={fields} onSubmit={onSubmit} />
          <CText
            variant="link"
            dataDetectorType="link"
            style={{textAlign: 'center'}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </CText>
        </View>
        <CText
          variant="link"
          dataDetectorType="link"
          style={{textAlign: 'center'}}
          onPress={() => navigation.navigate('Registration')}>
          Don't Have account? Register.
        </CText>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;
