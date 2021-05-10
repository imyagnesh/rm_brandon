import React from 'react';
import {View, Text, Button} from 'react-native';

const Registration = ({navigation}) => {
  return (
    <View>
      <Text>Registation</Text>
      <Button
        title="Go To Forgot Password"
        onPress={() => navigation.replace('ForgotPassword')}
      />
    </View>
  );
};

export default Registration;
