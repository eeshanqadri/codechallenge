import {StyleSheet} from 'react-native';
import {height, moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: moderateScale(12),
  },
  container: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(16),
  },
  cardContainer: {
    backgroundColor: colors.offWhite,
    padding: moderateScale(16),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: colors.blackOpacity12,
    marginBottom: moderateScale(4),
  },
  textInputContainerStyle: {
    marginTop: moderateScale(10),
  },
  textInputView: {
    paddingRight: moderateScale(12),
  },
  contentContainerStyle: {
    paddingTop: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(40),
  },
  emptyListView: {
    paddingHorizontal: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
  },
  noListText: {
    ...commonStyles.font_16_bold,
    textAlign: 'center',
  },
  noListSubTextStyle: {
    ...commonStyles.font_12_regular,
    lineHeight: moderateScale(18),
    marginTop: moderateScale(12),
    textAlign: 'center',
  },
});

export default styles;
