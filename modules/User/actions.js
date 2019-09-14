import { USER_SET_TOKEN, USER_GET_PROFILE } from './constants';

export const setToken = token => ({
  type: USER_SET_TOKEN,
  payload: { token },
});

export const getUserProfile = token => ({
  type: USER_GET_PROFILE,
  payload: {
    request: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: 'https://api.spotify.com/v1/me',
    },
  },
});
