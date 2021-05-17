import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {enableScreens} from 'react-native-screens';
import RootStack from './src/navigation/rootNavigation';
import ThemeProvider, {ThemeContext} from './src/context/themeContext';

enableScreens();

const Navigation = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <RootStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
