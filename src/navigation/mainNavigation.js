import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LogoutIcon from '../../assets/icons/logout.svg';
import HomeIcon from '../../assets/icons/home.svg';
import HomeOutlineIcon from '../../assets/icons/home_outline.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import SettingsOutlineIcon from '../../assets/icons/settings_outline.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = createBottomTabNavigator();
const Home = createNativeStackNavigator();
const Settings = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen
        name="Home"
        getComponent={() => require('../screens/HomeScreen').default}
      />
    </Home.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Settings.Navigator
      screenOptions={({navigation}) => {
        return {
          headerRight: () => {
            return (
              <BorderlessButton
                onPress={() => {
                  AsyncStorage.clear();
                  navigation.navigate('Authentication');
                }}>
                <LogoutIcon height={24} width={24} fill="red" />
              </BorderlessButton>
            );
          },
        };
      }}>
      <Settings.Screen
        name="Settings"
        getComponent={() => require('../screens/SettingsScreen').default}
      />
    </Settings.Navigator>
  );
};

const MainStack = () => (
  <Main.Navigator
    screenOptions={({route}) => {
      return {
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'HomeStack':
              if (focused) {
                return <HomeIcon height={size} width={size} fill={color} />;
              } else {
                return (
                  <HomeOutlineIcon height={size} width={size} fill={color} />
                );
              }
            case 'Settings':
              if (focused) {
                return <SettingsIcon height={size} width={size} fill={color} />;
              } else {
                return (
                  <SettingsOutlineIcon
                    height={size}
                    width={size}
                    fill={color}
                  />
                );
              }

            default:
              break;
          }
        },
      };
    }}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Main.Screen name="HomeStack" component={HomeStack} />
    <Main.Screen name="Settings" component={SettingsStack} />
  </Main.Navigator>
);

export default MainStack;
