import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {height, moderateScale, width} from '../styles/responsiveSize';

interface WrapperComponentProps {
  children?: ReactNode;
  isSafeAreaAvailable?: boolean;
  paddingAvailable?: boolean;
  mainViewStyle?: object;
}

const WrapperContainer: FC<WrapperComponentProps> = ({
  children,
  isSafeAreaAvailable = true,
  paddingAvailable = true,
  mainViewStyle,
}) => {
  const styles = externalStyles({paddingAvailable});
  return (
    <View
      style={{
        ...styles.container,
        ...mainViewStyle,
      }}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      {isSafeAreaAvailable ? <SafeAreaView /> : <></>}
      {children}
    </View>
  );
};

const externalStyles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: props?.paddingAvailable ? moderateScale(16) : 0,
      zIndex: -2,
    },
    loaderContainer: {
      backgroundColor: colors.blackOpacity90,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      height: height,
      width: width,
      zIndex: 200,
    },
    lottieStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(20),
      paddingVertical: moderateScale(24),
      paddingHorizontal: moderateScale(40),
    },
  });

export default React.memo(WrapperContainer);
