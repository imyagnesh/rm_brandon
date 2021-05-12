import React, {useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from '../../components/Form';
import LockOpen from '../../../assets/icons/lock_open.svg';
import fields from './fields';

const Registration = ({navigation}) => {
  useEffect(() => {
    const getToken = async () => {
      const data = await AsyncStorage.getItem('token');
      console.log(JSON.parse(data));
    };
    getToken();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Form
        fields={fields}
        buttonProps={{
          title: 'Register',
          leftIcon: () => <LockOpen height={24} width={24} fill="#fff" />,
        }}
        onSubmit={values => {
          console.log(values);
        }}
      />
    </View>
  );
};

export default Registration;
