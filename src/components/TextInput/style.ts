import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';

export default StyleSheet.create({
  label: {
    fontSize: fontSizes.sm,
    color: colors.MUTED,
    marginBottom: moderateScale(4),
    marginTop: moderateScale(12),
    fontWeight: fontWeights.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.BORDER,
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    fontSize: fontSizes.md,
    backgroundColor: colors.CARD,
    marginBottom: moderateScale(4),
    color: colors.TEXT,
  },
}); 