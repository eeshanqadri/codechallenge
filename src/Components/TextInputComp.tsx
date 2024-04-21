import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import strings from '../constants/lang';

interface TextInputCompProps {
  value: string;
  headerText?: string;
  placeholder?: string;
  textInputView?: object;
  textInputContainer?: object;
  containerStyle?: object;
  errorText?: string;
  leftImg?: any;
  isSecure?: boolean;
  isMobile?: boolean;
  onChangeText: (e: string) => void;
  rightCustomComp?: () => void;
  autoFocus?: boolean;
}

const TextInputComp = ({
  value,
  headerText,
  placeholder,
  textInputView,
  textInputContainer,
  containerStyle,
  errorText,
  leftImg,
  isSecure,
  isMobile,
  onChangeText,
  rightCustomComp,
  autoFocus = false,
}: TextInputCompProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const onPressSecure = () => {
    setSecureText(!secureText);
  };
  return (
    <>
      <View style={{...containerStyle}}>
        {headerText && <Text style={styles.headerTextStyle}>{headerText}</Text>}
        <View style={styles.mobileContainer}>
          <View
            style={{
              ...styles.textInputView,
              ...textInputView,
              ...{
                borderColor: errorText
                  ? colors.primary
                  : isFocused
                  ? colors.primary
                  : colors.blackOpacity10,
              },
            }}>
            {leftImg && <Image style={styles.imgStyle} source={leftImg} />}
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={{
                ...styles.textInputContainer,
                ...textInputContainer,
              }}
              selectionColor={colors.primary}
              placeholderTextColor={colors.blackOpacity50}
              placeholder={placeholder}
              textAlign={I18nManager.isRTL ? 'right' : 'left'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={isSecure ? secureText : false}
              autoFocus={autoFocus}
            />
            {rightCustomComp && rightCustomComp()}
            {isSecure && (
              <TouchableOpacity activeOpacity={1} onPress={onPressSecure}>
                <Text style={styles.showText}>
                  {secureText ? strings.SHOW : strings.HIDE}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {errorText && (
          <Text
            numberOfLines={1}
            style={{
              ...styles.errorText,
              ...{marginLeft: isMobile ? moderateScale(80) : 0},
            }}>
            {errorText}
          </Text>
        )}
      </View>
    </>
  );
};

export default React.memo(TextInputComp);

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: colors.blackOpacity05,
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(16),
    borderWidth: 1.4,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInputContainer: {
    ...commonStyles.font_14_regular,
    paddingVertical: moderateScale(12),
    paddingEnd: moderateScale(12),
    flex: 1,
  },
  headerTextStyle: {
    ...commonStyles.font_14_medium,
    marginBottom: moderateScale(8),
  },
  errorText: {
    ...commonStyles.font_12_regular,
    marginTop: moderateScale(4),
    marginLeft: moderateScale(2),
    color: colors.red,
  },
  imgStyle: {
    marginRight: moderateScale(12),
    tintColor: colors.text,
  },
  showText: {
    ...commonStyles.font_12_regular,
  },
  phoneCodeView: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(16),
    justifyContent: 'center',
    marginRight: moderateScale(16),
  },
  mobileContainer: {flexDirection: 'row'},
});
