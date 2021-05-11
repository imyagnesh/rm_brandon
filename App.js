import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Todo from './src/Todo';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import ForgotPassword from './src/screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Home" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
