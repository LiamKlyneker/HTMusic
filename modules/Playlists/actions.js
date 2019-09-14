import { GET_PLAYLISTS, GET_PLAYLIST_DETAIL, GET_TRACK_DETAIL } from './constants';

export const getPlaylistsByCountry = ({ token, country }) => ({
  type: GET_PLAYLISTS,
  payload: {
    request: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: 'https://api.spotify.com/v1/browse/featured-playlists',
      params: { country }
    },
  },
});

export const getPlaylistDetail = ({ token, playlistId }) => ({
  type: GET_PLAYLIST_DETAIL,
  payload: {
    request: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://api.spotify.com/v1/playlists/${playlistId}`,
    },
  },
});

export const getTrackDetail = ({ token, trackId }) => ({
  type: GET_TRACK_DETAIL,
  payload: {
    request: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://api.spotify.com/v1/tracks/${trackId}`,
    },
  },
});
