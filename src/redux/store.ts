import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/root.saga';
import historyReducer, {HistoryState} from './history/history.reducer';
import loginReducer, {LoginState} from './login/login.reducer';

export interface AppState {
  Login: LoginState;
  History: HistoryState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  Login: loginReducer,
  History: historyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default Store;
