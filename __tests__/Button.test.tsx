import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button/Button';

describe('Button Component', () => {
  it('renders with the given title', () => {
    const { getByText } = render(<Button title="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button title="Submit" onPress={onPressMock} testID="submit-button" />
    );

    fireEvent.press(getByTestId('submit-button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom style and textStyle props', () => {
    const buttonStyle = { backgroundColor: 'blue' };
    const textStyle = { color: 'white' };

    const { getByTestId, getByText } = render(
      <Button
        title="Styled Button"
        onPress={() => {}}
        style={buttonStyle}
        textStyle={textStyle}
        testID="styled-button"
      />
    );

    const button = getByTestId('styled-button');
    const text = getByText('Styled Button');

    const buttonStyleProp = Array.isArray(button.props.style)
      ? button.props.style
      : [button.props.style];

    const textStyleProp = Array.isArray(text.props.style)
      ? text.props.style
      : [text.props.style];

    expect(buttonStyleProp).toEqual(
      expect.arrayContaining([expect.objectContaining(buttonStyle)])
    );

    expect(textStyleProp).toEqual(
      expect.arrayContaining([expect.objectContaining(textStyle)])
    );
  });
});
