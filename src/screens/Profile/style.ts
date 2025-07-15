import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: moderateScale(24),
    backgroundColor: colors.CARD,
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
    borderColor: colors.BACKGROUND,
    backgroundColor: colors.MUTED,
    shadowColor: colors.SHADOW,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
    elevation: 4,
  },
  fieldsContainer: {
    width: '100%',
    backgroundColor: colors.BACKGROUND,
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    shadowColor: colors.SHADOW,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.06,
    shadowRadius: moderateScale(8),
    elevation: 2,
  },
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
  inputDisabled: {
    backgroundColor: colors.DISABLED_BACKKGROUND,
    borderColor: colors.DISABLE,
    color: colors.MUTED,
  },
  button: {
    backgroundColor: colors.PRIMARY,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  editButton: {
    backgroundColor: colors.TEXT,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginTop: moderateScale(8),
  },
  editButtonText: {
    color: colors.BACKGROUND,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    letterSpacing: 1,
  },
  text: {
    color: colors.BACKGROUND,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
  },
  bioInput: {
    height: moderateScale(80),
    textAlignVertical: 'top',
  },
  loadingIndicator: {
    flex: 1,
    alignSelf: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: colors.CARD,
  },
  buttonRowContainer: {
    marginTop: moderateScale(24),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles; 