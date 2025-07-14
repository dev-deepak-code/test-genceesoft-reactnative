import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import ProfileScreen from '../src/screens/Profile/Profile';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

jest.spyOn(Alert, 'alert');

const mockProfile = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  bio: 'React Native developer!',
};

describe('ProfileScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loader initially', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    const { getByTestId } = render(<ProfileScreen />);
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });

  it('loads profile from AsyncStorage', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockProfile));
    const { getByDisplayValue } = render(<ProfileScreen />);

    await waitFor(() => {
      expect(getByDisplayValue('Jane Doe')).toBeTruthy();
      expect(getByDisplayValue('jane@example.com')).toBeTruthy();
      expect(getByDisplayValue('React Native developer!')).toBeTruthy();
    });
  });

  it('uses default profile if AsyncStorage is empty', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    const { getByDisplayValue } = render(<ProfileScreen />);

    await waitFor(() => {
      expect(getByDisplayValue('John Doe')).toBeTruthy();
      expect(getByDisplayValue('john@example.com')).toBeTruthy();
      expect(getByDisplayValue('This is your bio. Edit it to tell us about yourself!')).toBeTruthy();
    });
  });

  it('enters edit mode and updates profile', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockProfile));
    const { getByText, getByPlaceholderText } = render(<ProfileScreen />);

    await waitFor(() => {
      expect(getByText('Edit Profile')).toBeTruthy();
    });

    fireEvent.press(getByText('Edit Profile'));

    const nameInput = getByPlaceholderText('Name');
    fireEvent.changeText(nameInput, 'Updated Name');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
            'userProfile',
            JSON.stringify({
              name: 'Updated Name',
              email: 'jane@example.com',
              bio: 'React Native developer!',
            })
          );
    });
  });

  it('cancels editing without saving changes', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockProfile));
    const { getByText, getByPlaceholderText } = render(<ProfileScreen />);

    await waitFor(() => getByText('Edit Profile'));

    fireEvent.press(getByText('Edit Profile'));

    const nameInput = getByPlaceholderText('Name');
    fireEvent.changeText(nameInput, 'Changed But Not Saved');

    fireEvent.press(getByText('Cancel'));

    expect(AsyncStorage.setItem).not.toHaveBeenCalled();
  });

  it('shows alert on save failure', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockProfile));
    (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error('Save failed'));

    const { getByText } = render(<ProfileScreen />);
    await waitFor(() => getByText('Edit Profile'));

    fireEvent.press(getByText('Edit Profile'));
    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Failed to save profile');
    });
  });
});
