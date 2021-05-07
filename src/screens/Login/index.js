import React from 'react';
import {View, Text, Button} from 'react-native';

const index = ({navigation}) => {
  return (
    <View style={{ flex: 1}}>
      <Text>Login Screen</Text>
      <Button
        title="Go To Todo App"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

export default index;
