import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import ProfileScreen from '../src/screens/Profile/Profile';
import * as StorageHelpers from '../src/utils/asyncStorageHelpers';

jest.mock('../src/utils/asyncStorageHelpers', () => ({
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

  it('shows alert on save failure', async () => {
    (StorageHelpers.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockProfile));
    (StorageHelpers.setItem as jest.Mock).mockRejectedValueOnce(new Error('Save failed'));

    const { getByText } = render(<ProfileScreen />);
    await waitFor(() => getByText('Edit Profile'));

    fireEvent.press(getByText('Edit Profile'));
    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Failed to save profile');
    });
  });
});
