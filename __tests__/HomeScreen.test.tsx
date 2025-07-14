import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import * as api from '../src/services/api';
import HomeScreen  from '../src/screens/Home/Home';

jest.mock('../src/assets/icons/heart_like.png', () => 'heart_like.png');
jest.mock('../src/assets/icons/heart_unlike.png', () => 'heart_unlike.png');

jest.mock('../src/services/api');

const mockedFetchUsers = api.fetchUsers as jest.Mock;
const mockedFetchPosts = api.fetchPosts as jest.Mock;

const mockUsers = [{ id: 1, name: 'John Doe' }];
const mockPosts = [
  {
    userId: 1,
    id: 101,
    title: 'Test Post',
    body: 'This is a test post',
  },
];

describe('HomeScreen Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedFetchUsers.mockResolvedValue(mockUsers);
    mockedFetchPosts.mockResolvedValue(mockPosts);
  });

  it('should render user and post correctly', async () => {
    const { getByText } = render(<HomeScreen />);
    expect(mockedFetchUsers).toHaveBeenCalled();

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Test Post')).toBeTruthy();
      expect(getByText('This is a test post')).toBeTruthy();
      expect(getByText('0 Likes')).toBeTruthy();
    });
  });

  it('should toggle like on button press', async () => {
    const { getByText, getByTestId } = render(<HomeScreen />);
    await waitFor(() => getByText('0 Likes'));

    const likeButton = getByTestId('like-button-101');
    fireEvent.press(likeButton);

    await waitFor(() => {
      expect(getByText('1 Likes')).toBeTruthy();
    });

    fireEvent.press(likeButton);

    await waitFor(() => {
      expect(getByText('0 Likes')).toBeTruthy();
    });
  });

  it('should show ActivityIndicator while loading', async () => {
    mockedFetchPosts.mockImplementationOnce(
      () =>
        new Promise(resolve =>
          setTimeout(() => resolve(mockPosts), 1000)
        )
    );

    const { getByTestId } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByTestId('ActivityIndicator')).toBeTruthy();
    });
  });

  it('handles fetchUsers error gracefully', async () => {
    mockedFetchUsers.mockRejectedValueOnce(new Error('Failed to fetch users'));
    const { getByTestId } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByTestId('FlatList')).toBeTruthy();
    });
  });

  it('handles fetchPosts error gracefully', async () => {
    mockedFetchPosts.mockRejectedValueOnce(new Error('Failed to fetch posts'));
    const { getByTestId } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByTestId('FlatList')).toBeTruthy();
    });
  });
});
