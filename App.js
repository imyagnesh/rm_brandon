import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import RootStack from './src/navigation/rootNavigation';

enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
