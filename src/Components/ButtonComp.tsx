import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import {MaterialIndicator} from 'react-native-indicators';

interface ButtonCompProps {
  btnText: string;
  btnStyle?: object;
  btnTextStyle?: object;
  onPressBtn?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const ButtonComp = ({
  btnText = '',
  btnStyle,
  onPressBtn,
  btnTextStyle,
  disabled = false,
  isLoading = false,
}: ButtonCompProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnStyle,
        ...btnStyle,
        ...{opacity: disabled ? 0.5 : 1},
      }}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPressBtn}>
      {isLoading ? (
        <MaterialIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <Text
          style={{
            ...commonStyles.font_14_bold,
            color: colors.white,
            ...btnTextStyle,
          }}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ButtonComp);

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
    paddingVertical: moderateScale(12),
  },
});
