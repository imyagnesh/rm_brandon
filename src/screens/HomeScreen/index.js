import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="open modal" onPress={() => navigation.navigate('Modal')} />
    </View>
  );
};

export default HomeScreen;
