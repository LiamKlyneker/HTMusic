import { success } from '#modules/utils'

import { GET_PLAYLISTS, GET_PLAYLIST_DETAIL, GET_TRACK_DETAIL } from './constants';

const defaultState = {
  isFetchingList: true,
  userList: [],

  isFetchingDetail: true,
  playlistDetail: {},

  isFetchingTrackDetail: true,
  trackDetail: {},
};

const playlistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        isFetchingList: true,
      };
      
    case success(GET_PLAYLISTS):
      return {
        ...state,
        isFetchingList: false,
        userList: action.payload.data.playlists.items,
      };
    
    case GET_PLAYLIST_DETAIL:
      return {
        ...state,
        isFetchingDetail: true,
      }
    case success(GET_PLAYLIST_DETAIL):
      return {
        ...state,
        isFetchingDetail: false,
        playlistDetail: action.payload.data,
      };
    
    case GET_TRACK_DETAIL:
      return {
        ...state,
        isFetchingTrackDetail: true,
      }
    case success(GET_TRACK_DETAIL):
      return {
        ...state,
        isFetchingTrackDetail: false,
        trackDetail: action.payload.data,
      };

    default:
      return state;
  }
};

export default playlistsReducer;
