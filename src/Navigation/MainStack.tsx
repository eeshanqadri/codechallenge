import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import * as ScreenName from '../Screens';

const Stack = createStackNavigator();

export default function () {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME_SCREEN}
        component={ScreenName.HomeScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={navigationStrings.CREATE_EMPLOYEE}
        component={ScreenName.CreateEmployee}
        options={{gestureEnabled: false}}
      />
    </>
  );
}
