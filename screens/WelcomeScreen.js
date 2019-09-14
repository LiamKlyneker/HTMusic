import React from 'react';
import { useSelector } from 'react-redux';

import AppNavigator from '../navigation/AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import { View } from 'react-native';

import { getUserData } from '#modules/User/selectors';

const WelcomeScreen = () => {
  /* Selectors */
  const { token, userData } = useSelector(getUserData());
  const isLogged = token.length > 0 && userData.id;

  return (
    <View style={{ flex: 1 }}>
      {!isLogged && <LoginScreen />}
      {isLogged && <AppNavigator />}
    </View>
  )
};

export default WelcomeScreen;
