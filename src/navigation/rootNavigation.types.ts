import {GameDetails} from '../redux/history/history.reducer.types';

export type HomeNavigationStackType = {
  StartScreen: undefined;
  GamePlayScreen: undefined;
  GameEndScreen: GameDetails;
};

export type HistoryNavigationStackType = {
  HistoryScreen: undefined;
};

export type LoginNavigationStackType = {
  Login: undefined;
};

export type TabNavigationStackType = {
  Home: undefined;
  History: undefined;
};
