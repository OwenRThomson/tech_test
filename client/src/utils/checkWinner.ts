import { Board, EndState, XorO } from "../types";

export function checkWinner(board: Board): EndState {
  const size = board.length;

  // Convert the board to numeric values. This will make it easier as things scale
  // because instead of having to check for X or 0 we can check for a sum value
  // If the value of a row, column or diagonal is the same as the size it's a win
  const numericBoard = board.map((row) =>
    row.map((cell) => (cell === "X" ? 1 : cell === "O" ? -1 : 0))
  );

  // Check the rows for a win
  // Use reduce to sum the values of each row
  for (let row = 0; row < size; row++) {
    const rowSum = numericBoard[row].reduce((sum, cell) => sum + cell, 0);
    if (rowSum === size) return "X";
    if (rowSum === -size) return "O";
  }

  // Check the columns
  for (let col = 0; col < size; col++) {
    const colSum = numericBoard.reduce((sum, row) => sum + row[col], 0);
    if (colSum === size) return "X";
    if (colSum === -size) return "O";
  }

  // Check diagonals
  /*
    Example:
    [
      [1,    null,  null],
      [null,  1,     0],
      [0,    null,   1]
    ]
  */
  const loweredDiagonalSum = numericBoard.reduce(
    (sum, row, index) => sum + row[index],
    0
  );
  if (loweredDiagonalSum === size) return "X";
  if (loweredDiagonalSum === -size) return "O";

  // Check the raised diagonal is more complicated
  /*
    Example:
    [
      [0,     null,    1],
      [null,    1,     0],
      [1,     null,    1]
    ]

    In a 3x3 game we need (0, 2), (1, 1), (2, 0)
    so (3 - 1) - 0 = 2
       (3 - 1) - 1 = 1
       (3 - 1) - 2 = 0
  */
  const raisedDiagonalSum = numericBoard.reduce((sum, row, index) => {
    const columnIndex = size - 1 - index; // This makes sure it goes backwards to forward
    return sum + row[columnIndex];
  }, 0);

  if (raisedDiagonalSum === size) return "X";
  if (raisedDiagonalSum === -size) return "O";

  // Check for a draw (full board)
  const isBoardFull = board.every((row) => row.every((cell) => cell !== null));
  if (isBoardFull) return "Draw";

  // No winner
  return null;
}

// Notes
// Disadvantages:
// - It would make it hard to add another player
