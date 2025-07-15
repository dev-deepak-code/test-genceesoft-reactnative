import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  text: {
    color: colors.BACKGROUND,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
  },
});
