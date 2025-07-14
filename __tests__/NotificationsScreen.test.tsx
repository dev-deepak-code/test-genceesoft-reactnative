import React from 'react';
import { render } from '@testing-library/react-native';
import  NotificationsScreen  from '../src/screens/Notifications/Notifications';

describe('NotificationsScreen', () => {
  it('renders the screen with default message', () => {
    const { getByText } = render(<NotificationsScreen />);
    expect(getByText('No notifications yet.')).toBeTruthy();
  });
});
