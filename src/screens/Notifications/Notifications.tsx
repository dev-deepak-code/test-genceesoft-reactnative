import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No notifications yet.</Text>
    </View>
  );
} 