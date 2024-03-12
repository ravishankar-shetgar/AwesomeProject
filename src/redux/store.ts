import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/root.saga';
import historyReducer, {HistoryState} from './history/history.reducer';
import loginReducer, {LoginState} from './login/login.reducer';

export interface AppState {
  Login: LoginState;
  History: HistoryState;
}

const persistConfig: PersistConfig<AppState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Login', 'History'],
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
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

export const Persistor = persistStore(Store);

sagaMiddleware.run(rootSaga);

export default Store;
