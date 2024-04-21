import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: moderateScale(22),
    paddingHorizontal: moderateScale(16),
  },
  containerStyle: {
    marginBottom: moderateScale(18),
  },
  btnStyle: {
    marginVertical: moderateScale(26),
  },
  headerTextStyle: {
    ...commonStyles.font_14_medium,
    marginBottom: moderateScale(8),
  },
  textInputView: {
    backgroundColor: colors.blackOpacity05,
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(16),
    borderWidth: 1.4,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: moderateScale(18),
    paddingVertical: moderateScale(12),
    borderColor: colors.blackOpacity10,
  },
  dobText: {
    ...commonStyles.font_14_regular,
  },
});

export default styles;
