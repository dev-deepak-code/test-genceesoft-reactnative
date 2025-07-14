import { moderateScale } from '../utils/deviceConfig';

const fontSizes = {
  xs: moderateScale(12),
  sm: moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(28),
};

const fontWeights = {
  regular: '400' as '400',
  medium: '500' as '500',
  bold: '700' as '700',
};

const fontFamilies = {
  default: 'System',
};

export { fontSizes, fontWeights, fontFamilies }; 