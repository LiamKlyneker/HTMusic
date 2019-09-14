import { createSelector } from 'reselect';
import { USER } from './constants';

export const selectUserData = () => state => state[USER];

export const getUserData = () =>
  createSelector(
    selectUserData(),
    state => state
  );
