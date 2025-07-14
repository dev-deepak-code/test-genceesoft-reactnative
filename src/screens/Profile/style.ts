import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: moderateScale(24),
    backgroundColor: colors.card,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: moderateScale(32),
    marginBottom: moderateScale(24),
    width: '100%',
  },
  profileImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    borderWidth: moderateScale(3),
    borderColor: colors.background,
    backgroundColor: colors.muted,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
    elevation: 4,
  },
  fieldsContainer: {
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.06,
    shadowRadius: moderateScale(8),
    elevation: 2,
  },
  label: {
    fontSize: fontSizes.sm,
    color: colors.muted,
    marginBottom: moderateScale(4),
    marginTop: moderateScale(12),
    fontWeight: fontWeights.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    fontSize: fontSizes.md,
    backgroundColor: colors.card,
    marginBottom: moderateScale(4),
    color: colors.text,
  },
  inputDisabled: {
    backgroundColor: colors.disabledBackground,
    borderColor: colors.disabled,
    color: colors.muted,
  },
  editButton: {
    backgroundColor: colors.text,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginTop: moderateScale(8),
  },
  editButtonText: {
    color: colors.background,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    letterSpacing: 1,
  },
});

export default styles; 