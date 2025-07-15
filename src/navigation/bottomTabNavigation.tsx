import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, NotificationsScreen} from '../screens';
import { Image } from 'react-native';
import { home_active, home_inactive, user_active, user_inactive, bell_active, bell_inactive } from '../assets/icons';

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
            source={focused ? home_active : home_inactive}
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
            source={focused ? user_active : user_inactive}
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
            source={focused ? bell_active : bell_inactive}
            style={{ width: size || 24, height: size || 24 }}
            resizeMode="contain"
          />
        )
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigation; 