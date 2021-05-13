import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import SplashScreen from '../screens/SplashScreen';

const Root = createNativeStackNavigator();

const RootStack = () => {
  const isAuthenticated = true;
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        stackPresentation: 'fullScreenModal',
      }}>
      <Root.Screen name="Splash" component={SplashScreen} />
      {/* stack navigation */}
      <Root.Screen
        name="Authentication"
        getComponent={() => require('../navigation/authNavigation').default}
      />
      {/* tab Navigation */}
      <Root.Screen
        name="Main"
        getComponent={() => require('../navigation/mainNavigation').default}
      />
    </Root.Navigator>
  );
};

export default RootStack;
