import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LogoutIcon from '../../assets/icons/logout.svg';
import HomeIcon from '../../assets/icons/home.svg';
import HomeOutlineIcon from '../../assets/icons/home_outline.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import SettingsOutlineIcon from '../../assets/icons/settings_outline.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainDrawer = createDrawerNavigator();
const MainTab = createBottomTabNavigator();
const Home = createNativeStackNavigator();
const Settings = createNativeStackNavigator();
const Notification = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={({navigation}) => {
        return {
          headerLeft: () => {
            return (
              <BorderlessButton onPress={() => navigation.openDrawer()}>
                <MenuIcon height={24} width={24} fill="red" />
              </BorderlessButton>
            );
          },
        };
      }}>
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
          headerLeft: () => {
            return (
              <BorderlessButton onPress={() => navigation.openDrawer()}>
                <MenuIcon height={24} width={24} fill="red" />
              </BorderlessButton>
            );
          },
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

const MainTabScreen = () => (
  <MainTab.Navigator
    screenOptions={({route}) => {
      return {
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
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
    <MainTab.Screen name="Home" component={HomeStack} />
    <MainTab.Screen name="Settings" component={SettingsStack} />
  </MainTab.Navigator>
);

const NotificationScreenStack = () => {
  return (
    <Notification.Navigator
      screenOptions={({navigation}) => {
        return {
          headerLeft: () => {
            return (
              <BorderlessButton onPress={() => navigation.openDrawer()}>
                <MenuIcon height={24} width={24} fill="red" />
              </BorderlessButton>
            );
          },
        };
      }}>
      <Notification.Screen
        name="Notification"
        getComponent={() => require('../screens/Notification').default}
      />
    </Notification.Navigator>
  );
};

const MainDrawerScreen = () => {
  return (
    <MainDrawer.Navigator>
      <MainDrawer.Screen name="Main" component={MainTabScreen} />
      <MainDrawer.Screen
        name="Notification"
        component={NotificationScreenStack}
      />
    </MainDrawer.Navigator>
  );
};

export default MainDrawerScreen;