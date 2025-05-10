export type XorO = "X" | "O";

export type Board = (XorO | null)[][];
/* I prefer NULL to undefined for the board empty state */

export type Player = {
  id: string;
  name: string;
  symbol: XorO;
};

// My initial idea for a game state that may be rewritten later
export type GameState = {
  board: Board;
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
};
