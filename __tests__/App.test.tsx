import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }: any) => <>{children}</>,
  };
});

jest.mock('../src/navigation/bottomTabNavigation', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return () => <Text>Mocked Bottom Tabs</Text>;
});

describe('App Entry Point', () => {
  it('renders BottomTabNavigation inside NavigationContainer', () => {
    const { getByText } = render(<App />);
    expect(getByText('Mocked Bottom Tabs')).toBeTruthy();
  });
});
