import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from './src/Todo';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
