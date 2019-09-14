import { combineReducers } from 'redux';

import { USER } from './User/constants';
import userReducer from './User/reducer';

import { PLAYLISTS } from './Playlists/constants';
import playlistsReducer from './Playlists/reducer';

const rootReducer = combineReducers({
  [USER]: userReducer,
  [PLAYLISTS]: playlistsReducer,
});

export default rootReducer;
