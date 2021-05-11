import React from 'react';
import {View, Text, Button} from 'react-native';
import Form from '../../components/Form';
import LockOpen from '../../../assets/icons/lock_open.svg'
import fields from './fields';

const Registration = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Form
        fields={fields}
        buttonProps={{
          title: 'Register',
          leftIcon: () => <LockOpen height={24} width={24} fill="#fff" />
        }}
        onSubmit={values => {
          console.log(values);
        }}
      />
    </View>
  );
};

export default Registration;
