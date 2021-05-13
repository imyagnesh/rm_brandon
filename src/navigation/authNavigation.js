import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Login"
      getComponent={() => require('../screens/Login').default}
    />
    <Stack.Screen
      name="Registration"
      getComponent={() => require('../screens/Registration').default}
      options={{
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ForgotPassword"
      getComponent={() => require('../screens/ForgotPassword').default}
      options={{
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

export default AuthenticationStack;
