import { createSelector } from 'reselect';
import { PLAYLISTS } from './constants';

export const selectPlaylistsData = () => state => state[PLAYLISTS];

export const getPlaylistsData = () =>
  createSelector(
    selectPlaylistsData(),
    state => state
  );
