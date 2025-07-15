import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Post from '../src/components/Post/Post';

const mockPost = {
  userId: 1,
  id: 101,
  title: 'Test Post Title',
  body: 'This is a test post body.',
};

const mockUser = {
  id: 1,
  name: 'Jane Doe',
};

describe('Post Component', () => {
  it('renders post content with user info', () => {
    const { getByText, getByTestId } = render(
      <Post post={mockPost} user={mockUser} liked={false} onLike={() => {}} />
    );

    expect(getByText('Jane Doe')).toBeTruthy();
    expect(getByText('Test Post Title')).toBeTruthy();
    expect(getByText('This is a test post body.')).toBeTruthy();
    expect(getByText('Like')).toBeTruthy();
    expect(getByText('0 Likes')).toBeTruthy();
    expect(getByText('View Comments (mock)')).toBeTruthy();
    expect(getByTestId('like-button-101')).toBeTruthy();
  });

  it('calls onLike with correct post id when like button is pressed', () => {
    const mockOnLike = jest.fn();

    const { getByTestId } = render(
      <Post post={mockPost} user={mockUser} liked={false} onLike={mockOnLike} />
    );

    fireEvent.press(getByTestId('like-button-101'));
    expect(mockOnLike).toHaveBeenCalledWith(101);
  });

  it('shows unlike when liked is true', () => {
    const { getByText } = render(
      <Post post={mockPost} user={mockUser} liked={true} onLike={() => {}} />
    );

    expect(getByText('Unlike')).toBeTruthy();
    expect(getByText('1 Likes')).toBeTruthy();
  });

  it('calls onCommentsPress when comment button is pressed', () => {
    const mockOnCommentsPress = jest.fn();

    const { getByText } = render(
      <Post
        post={mockPost}
        user={mockUser}
        liked={false}
        onLike={() => {}}
        onCommentsPress={mockOnCommentsPress}
      />
    );

    fireEvent.press(getByText('View Comments (mock)'));
    expect(mockOnCommentsPress).toHaveBeenCalled();
  });

  it('uses default user label if user is not provided', () => {
    const { getByText } = render(
      <Post post={mockPost} liked={false} onLike={() => {}} />
    );

    expect(getByText('User')).toBeTruthy();
  });
});
