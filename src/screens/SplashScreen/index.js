import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('Yagnesh');
  const [lastName, setLastName] = useState('Modh');
  // dont provide Second Parameter then it will work as CDM & CDU
  // if provide [] as second parameter it will work as cdm
  useEffect(() => {
    checkToken();
    return () => {};
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Authentication');
      }
    } catch (error) {
      navigation.navigate('Authentication', {
        error: 'Token Load Fail',
      });
    }
  };

  //   useEffect(() => {
  //     console.log('useEffect');
  //     const timer = setTimeout(() => {
  //       console.log('timer');
  //     }, 1000);
  //     // cwum
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log('chnaged firstname');
  //   }, [firstName]);

  //   useEffect(() => {
  //     console.log('chnaged lastName');
  //   }, [lastName]);

  //   useEffect(() => {
  //     console.log('chnaged firstname & lastName');
  //   }, [firstName, lastName]);

  return (
    <SafeAreaView>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Button
        title="Change FirstName"
        onPress={() => {
          setFirstName('rohit');
        }}
      />
      <Button
        title="Change LastName"
        onPress={() => {
          setLastName('Sharma');
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
