import {PlayerType} from '../../screens/gameplay/GamePlay.screen';

export interface GameDetails {
  id: string;
  loser: PlayerType;
  winner: PlayerType;
  date: string;
  userName: string;
}
