import {StyleSheet} from 'react-native';
import fontFamily from './fontFamily';
import {textScale} from './responsiveSize';
import colors from './colors';

export const hitSlopProp = {
  top: 16,
  right: 16,
  left: 16,
  bottom: 16,
};

const commonStyles = StyleSheet.create({
  // 8
  font_8_regular: {
    fontSize: textScale(8),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_8_medium: {
    fontSize: textScale(8),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_8_bold: {
    fontSize: textScale(8),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_8_semiBold: {
    fontSize: textScale(8),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_8_extraLight: {
    fontSize: textScale(8),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 10
  font_10_regular: {
    fontSize: textScale(10),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_10_medium: {
    fontSize: textScale(10),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_10_bold: {
    fontSize: textScale(10),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_10_semiBold: {
    fontSize: textScale(10),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_10_extraLight: {
    fontSize: textScale(10),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 12
  font_12_regular: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_12_medium: {
    fontSize: textScale(12),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_12_bold: {
    fontSize: textScale(12),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_12_semiBold: {
    fontSize: textScale(12),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_12_extraLight: {
    fontSize: textScale(12),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 14
  font_14_regular: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_14_medium: {
    fontSize: textScale(14),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_14_bold: {
    fontSize: textScale(14),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_14_semiBold: {
    fontSize: textScale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_14_extraLight: {
    fontSize: textScale(14),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 16
  font_16_regular: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_16_medium: {
    fontSize: textScale(16),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_16_bold: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_16_semiBold: {
    fontSize: textScale(16),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_16_extraLight: {
    fontSize: textScale(16),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 18
  font_18_regular: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_18_medium: {
    fontSize: textScale(18),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_18_bold: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_18_semiBold: {
    fontSize: textScale(18),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_18_extraLight: {
    fontSize: textScale(18),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 20
  font_20_regular: {
    fontSize: textScale(20),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_20_medium: {
    fontSize: textScale(20),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_20_bold: {
    fontSize: textScale(20),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_20_semiBold: {
    fontSize: textScale(20),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_20_extraLight: {
    fontSize: textScale(20),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 22
  font_22_regular: {
    fontSize: textScale(22),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_22_medium: {
    fontSize: textScale(22),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_22_bold: {
    fontSize: textScale(22),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_22_semiBold: {
    fontSize: textScale(22),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_22_extraLight: {
    fontSize: textScale(22),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 24
  font_24_regular: {
    fontSize: textScale(24),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_24_medium: {
    fontSize: textScale(24),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_24_bold: {
    fontSize: textScale(24),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_24_semiBold: {
    fontSize: textScale(24),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_24_extraLight: {
    fontSize: textScale(24),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 26
  font_26_regular: {
    fontSize: textScale(26),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_26_medium: {
    fontSize: textScale(26),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_26_bold: {
    fontSize: textScale(26),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_26_semiBold: {
    fontSize: textScale(26),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_26_extraLight: {
    fontSize: textScale(26),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 28
  font_28_regular: {
    fontSize: textScale(28),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_28_medium: {
    fontSize: textScale(28),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_28_bold: {
    fontSize: textScale(28),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_28_semiBold: {
    fontSize: textScale(28),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_28_extraLight: {
    fontSize: textScale(28),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  //30
  font_30_regular: {
    fontSize: textScale(30),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_30_medium: {
    fontSize: textScale(30),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_30_bold: {
    fontSize: textScale(30),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_30_semiBold: {
    fontSize: textScale(30),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  // 32
  font_32_regular: {
    fontSize: textScale(32),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_32_medium: {
    fontSize: textScale(32),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_32_bold: {
    fontSize: textScale(32),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_32_semiBold: {
    fontSize: textScale(32),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_34_extraLight: {
    fontSize: textScale(34),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  // 34
  font_34_regular: {
    fontSize: textScale(34),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_34_medium: {
    fontSize: textScale(34),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_34_bold: {
    fontSize: textScale(34),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_34_semiBold: {
    fontSize: textScale(34),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },

  // 38
  font_38_regular: {
    fontSize: textScale(38),
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'left',
  },
  font_38_medium: {
    fontSize: textScale(38),
    fontFamily: fontFamily.medium,
    color: colors.text,
    textAlign: 'left',
  },
  font_38_bold: {
    fontSize: textScale(38),
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'left',
  },
  font_38_semiBold: {
    fontSize: textScale(38),
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'left',
  },
  font_38_extraLight: {
    fontSize: textScale(38),
    fontFamily: fontFamily.extraLight,
    color: colors.text,
    textAlign: 'left',
  },
  shadowStyle: {
    backgroundColor: colors.text,
    borderRadius: 2,
    shadowColor: colors.text,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
});

export default commonStyles;
