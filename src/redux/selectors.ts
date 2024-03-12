import {AppState} from './store';

export const getIsLoggedIn = (state: AppState) => state.Login.isLoggedIn;
export const getGamesHistory = (state: AppState) => state.History.gameHistory;
export const getUserName = (state: AppState) =>
  state.Login.userDetails?.userName || '';
export const getLoginErrorMessage = (state: AppState) =>
  state.Login.loginErrorMessage;
