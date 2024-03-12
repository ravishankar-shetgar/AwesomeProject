import {fork} from 'redux-saga/effects';
import {onGamePlayScreen} from './gamePlayScreen.saga';
import {onLoginScreen} from './loginScreen.saga';

export function* rootSaga() {
  yield fork(onLoginScreen);
  yield fork(onGamePlayScreen);
}
