import {Animated, LayoutAnimation, UIManager} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export function ApplyEaseOutAnimation() {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

export function InitAnimation() {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const getScaleTransformationStyle = (
  animated: any,
  startSize = 1,
  endSize = 0.95,
) => {
  const interpolation = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [startSize, endSize],
  });
  return {
    transform: [{scale: interpolation}],
  };
};

export const pressInAnimation = (animated: any, duration = 150) => {
  animated.setValue(0);
  Animated.timing(animated, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  }).start();
};

export const pressOutAnimation = (animated: any, duration = 150) => {
  animated.setValue(1);
  Animated.timing(animated, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  }).start();
};

export const generateUniqueID = () => {
  const timestamp = Math.floor(Date.now());
  const randomNum = Math.floor(Math.random() * 90) + 10;
  const uniqueID = `${timestamp} ${randomNum}`;
  return uniqueID;
};

const showError = (message: string): void => {
  showMessage({
    message: message,
    type: 'success',
  });
};

const showSuccess = (message: string): void => {
  showMessage({
    message: message,
    type: 'danger',
  });
};

export {showError, showSuccess};
