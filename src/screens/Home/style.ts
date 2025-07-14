import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.background,
    margin: moderateScale(10),
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    elevation: 2,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  userName: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    color: colors.text,
  },
  postTitle: {
    marginBottom: moderateScale(8),
    fontSize: fontSizes.md,
    color: colors.text,
    fontWeight: fontWeights.medium,
  },
  postImage: {
    width: '100%',
    height: moderateScale(200),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  postBody: {
    color: colors.textSecondary,
    marginBottom: moderateScale(8),
    fontSize: fontSizes.sm,
  },
  likeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  likeIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  commentsButton: {
    marginTop: moderateScale(4),
  },
  commentsText: {
    color: colors.muted,
    fontSize: fontSizes.sm,
  },
  footerLoading: {
    margin: moderateScale(16),
  },
});

export default styles; 