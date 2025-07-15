import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInput from '../src/components/TextInput/TextInput';

describe('Custom TextInput Component', () => {
  it('renders label and input correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <TextInput label="Username" placeholder="Enter your name" />
    );

    expect(getByText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Enter your name')).toBeTruthy();
  });

  it('accepts and updates input value', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(
      <TextInput
        label="Email"
        placeholder="Enter email"
        value="test@example.com"
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByPlaceholderText('Enter email');
    fireEvent.changeText(input, 'new@example.com');

    expect(onChangeTextMock).toHaveBeenCalledWith('new@example.com');
  });

  it('applies custom styles', () => {
    const { getByPlaceholderText, getByText } = render(
      <TextInput
        label="Styled Input"
        placeholder="Custom input"
        style={{ color: 'red' }}
        labelStyle={{ fontSize: 18 }}
        containerStyle={{ marginBottom: 10 }}
      />
    );

    expect(getByText('Styled Input').props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontSize: 18 })])
    );

    expect(getByPlaceholderText('Custom input').props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: 'red' })])
    );
  });
});
