import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle, testID }) => (
  <TouchableOpacity onPress={onPress} style={style} testID={testID}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default Button;