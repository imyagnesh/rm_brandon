import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import CText from '../../components/CText';
import LockOpen from '../../../assets/icons/lock_open.svg';
import CButton from '../../components/cButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Field, Formik} from 'formik';
import fields from './fields';
import Form from '../../components/Form';

const index = ({navigation}) => {
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
          <Form
            fields={fields}
            onSubmit={values => {
              console.log(values);
            }}
          />
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
