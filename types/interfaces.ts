export interface ITable {
  id: string;
  name: string;
  players: IPlayer[];
  isPlaying: boolean;
}

export interface IPlayer {
  id: string;
  chipCount: number;
}
