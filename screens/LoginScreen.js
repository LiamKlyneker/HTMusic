import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { AuthSession } from 'expo';

import useActions from '#hooks/useActions';
import { setToken, getUserProfile } from '#modules/User/actions';

const SPOTIFY_CLIENT = '81b00ea91ae247189cb44ecd0d35c721'; 

const LoginScreen = () => {
  /* Actions */
  const actions = useActions({
    setToken,
    getUserProfile,
  });

  /* Methods */
  const handlePressAsync = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl:
        `https://accounts.spotify.com/authorize?response_type=token` +
        `&client_id=${SPOTIFY_CLIENT}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&scope=user-read-private`,
    });
    // AsyncStorage.setItem('@access_token', result.params.access_token)
    actions.getUserProfile(result.params.access_token);
    actions.setToken(result.params.access_token);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HT Music</Text>
      <Button title="Login With Spotify" onPress={handlePressAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 24,
  },
});

export default LoginScreen;
