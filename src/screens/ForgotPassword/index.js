import React from 'react';
import {View, Text, Button} from 'react-native';

const ForgotPassword = ({navigation}) => {
  return (
    <View>
      <Text>Forgot Password</Text>
      <Button title="Go to Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ForgotPassword;
