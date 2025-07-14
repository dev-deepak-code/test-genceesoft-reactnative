import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { fontSizes } from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: fontSizes.lg,
    color: colors.textSecondary,
  },
});

export default styles; 