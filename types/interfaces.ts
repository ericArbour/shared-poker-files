export interface ITable {
  id: string;
  name: string;
  playerCount: number;
  isPlaying: boolean;
}

export interface IPlayer {
  id: string;
  chipCount: number;
}
