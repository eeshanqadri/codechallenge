import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateScale, textScale, width} from '../styles/responsiveSize';
import colors from '../styles/colors';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import imagePath from '../constants/imagePath';

interface HeaderCompProps {
  headerText?: string;
  lineStyle?: object;
  headerContainer?: object;
  leftComp?: any;
  centerComp?: any;
}

const HeaderComp = ({
  headerText = '',
  lineStyle,
  headerContainer,
  leftComp = null,
  centerComp = null,
}: HeaderCompProps) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <>
      <View style={{...styles.headerContainer, ...headerContainer}}>
        {leftComp === null ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}>
            <Image source={imagePath.backIcon} />
          </TouchableOpacity>
        ) : (
          leftComp()
        )}
        {centerComp === null ? (
          <View style={styles.centerTextView}>
            <Text style={styles.headerTextStyle}>{headerText}</Text>
          </View>
        ) : (
          centerComp()
        )}
      </View>
      <View style={{...styles.lineStyle, ...lineStyle}} />
    </>
  );
};

export default React.memo(HeaderComp);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(18),
    paddingHorizontal: moderateScale(16),
    paddingTop: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(16),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  iconStyle: {
    marginRight: moderateScale(16),
  },
  headerTextStyle: {
    ...commonStyles.font_16_semiBold,
  },
  lineStyle: {
    height: 1,
    backgroundColor: colors.greyLine,
    width: width,
  },
  rightIcons: {
    flex: 1,
  },
  sideIcon: {
    marginLeft: moderateScale(14),
  },
  rightStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagView: {
    backgroundColor: 'red',
    position: 'absolute',
    right: I18nManager.isRTL ? 0 : -2,
    left: !I18nManager.isRTL ? 0 : -2,
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    top: -2,
  },
  bagText: {
    ...commonStyles.font_10_bold,
    color: colors.white,
    fontSize: textScale(9),
  },
  centerTextView: {flex: 1, marginStart: moderateScale(10)},
  imgStyle: {tintColor: colors.text},
});
