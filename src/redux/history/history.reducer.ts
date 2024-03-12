import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameDetails} from './history.reducer.types';

export interface HistoryState {
  gameHistory: GameDetails[];
}

export const INITIAL_STATE: HistoryState = {
  gameHistory: [],
};

export const History = createSlice({
  name: 'History',
  initialState: INITIAL_STATE,
  reducers: {
    addGameToHistory: (state, action: PayloadAction<GameDetails>) => ({
      ...state,
      gameHistory: [...state.gameHistory, action.payload],
    }),
  },
});

export const {addGameToHistory} = History.actions;

export default History.reducer;
