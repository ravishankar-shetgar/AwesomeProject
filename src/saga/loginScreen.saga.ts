import {createAction} from '@reduxjs/toolkit';
import {put, take} from 'redux-saga/effects';
import STRINGS from '../common/strings';
import {ACTION_TYPES} from '../redux/actions';
import {setLoginData, setLoginErrorMessage} from '../redux/login/login.reducer';
import {UserDetails} from '../redux/login/login.reducer.types';

interface LoginPayload extends UserDetails {
  password: string;
}

export const loginUserAction = createAction<LoginPayload>(ACTION_TYPES.login);

// MOCK api to login
const authenticate = (loginPayload: LoginPayload) => {
  const AVAILABLE_USERS = [
    {
      id: '001',
      username: 'admin',
      password: 'admin1234',
    },
    {
      id: '002',
      username: 'guest',
      password: 'guest1234',
    },
  ];

  const isUserAvailable = AVAILABLE_USERS.find(
    user =>
      user.password === loginPayload.password &&
      user.username === loginPayload.userName,
  );

  if (!isUserAvailable) {
    return false;
  } else {
    return true;
  }
};

export function* onLoginScreen() {
  while (true) {
    const {payload}: {payload: LoginPayload} = yield take(ACTION_TYPES.login);
    const result = authenticate(payload);

    if (result) {
      yield put(setLoginData(payload));
    } else {
      yield put(setLoginErrorMessage(STRINGS.userNotAvailable));
    }
  }
}
