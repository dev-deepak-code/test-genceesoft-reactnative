import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, NotificationsScreen} from '../screens';
import { Image } from 'react-native';
import homeActive from '../assets/icons/home_active.png';
import homeInactive from '../assets/icons/home_inactive.png';
import userActive from '../assets/icons/user_active.png';
import userInactive from '../assets/icons/user_inactive.png';
import bellActive from '../assets/icons/bell_active.png';
import bellInactive from '../assets/icons/bell_inactive.png';

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={focused ? homeActive : homeInactive}
            style={{ width: size || 24, height: size || 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={focused ? userActive : userInactive}
            style={{ width: size || 24, height: size || 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={focused ? bellActive : bellInactive}
            style={{ width: size || 24, height: size || 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigation; 