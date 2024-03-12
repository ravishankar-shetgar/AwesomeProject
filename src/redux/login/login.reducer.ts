import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserDetails} from './login.reducer.types';

export interface LoginState {
  isLoggedIn: boolean;
  userDetails: UserDetails | null;
  loginErrorMessage: string;
}

export const INITIAL_STATE: LoginState = {
  isLoggedIn: false,
  userDetails: null,
  loginErrorMessage: '',
};

export const Login = createSlice({
  name: 'Login',
  initialState: INITIAL_STATE,
  reducers: {
    setLoginData: (state, action: PayloadAction<UserDetails>) => ({
      ...state,
      isLoggedIn: true,
      userDetails: action.payload,
      loginErrorMessage: '',
    }),
    logoutUser: () => ({
      loginErrorMessage: '',
      isLoggedIn: false,
      userDetails: null,
    }),
    setLoginErrorMessage: (state, action: PayloadAction<string>) => ({
      ...state,
      loginErrorMessage: action.payload,
    }),
  },
});

export const {setLoginData, logoutUser, setLoginErrorMessage} = Login.actions;

export default Login.reducer;
