import { success } from '#modules/utils'

import { USER_SET_TOKEN, USER_GET_PROFILE } from './constants';

const defaultState = {
  token: '',
  userData: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    case success(USER_GET_PROFILE):
      return {
        ...state,
        userData: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
