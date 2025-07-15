import React from 'react';
import { View, Text, TextInput as RNTextInput, TextInputProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import styles from './style';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
}

const TextInput: React.FC<CustomTextInputProps> = ({ label, containerStyle, labelStyle, style, ...props }) => {
  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <RNTextInput {...props} style={[styles.input, style]} />
    </View>
  );
};

export default TextInput; 