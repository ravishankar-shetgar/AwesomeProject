import {createAction} from '@reduxjs/toolkit';
import {fork, put, take} from 'redux-saga/effects';
import {ACTION_TYPES} from '../redux/actions';
import {addGameToHistory} from '../redux/history/history.reducer';
import {GameDetails} from '../redux/history/history.reducer.types';
import {logoutUser} from '../redux/login/login.reducer';

export const addGameToHistoryAction = createAction<GameDetails>(
  ACTION_TYPES.addGameToHistory,
);

export const logoutAction = createAction(ACTION_TYPES.logout);

function* addToHistoryWatcher() {
  while (true) {
    const {payload}: {payload: GameDetails} = yield take(
      ACTION_TYPES.addGameToHistory,
    );

    yield put(addGameToHistory(payload));
  }
}

function* logoutWatcher() {
  while (true) {
    yield take(ACTION_TYPES.logout);

    yield put(logoutUser());
  }
}

export function* onGamePlayScreen() {
  yield fork(addToHistoryWatcher);
  yield fork(logoutWatcher);
}
