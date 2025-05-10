import React, { useState } from "react";
import { XorO, Board } from "./types";
import BoardComponent from "./components/Board";

export const Main = () => {
  const gameSize = 3; // TODO: Make this dynamic

  const [board, setBoard] = useState<Board>(
    Array.from({ length: gameSize }, () => Array(gameSize).fill(null))
  );

  const [currentPlayer, setCurrentPlayer] = useState("X" as XorO);

  const handleMove = (row: number, col: number) => {
    if (board[row][col] !== null) return; // TODO: Add user feedback, Skip go? Idk I think if you're stupid enough to click a taken cell you deserve to lose your turn!

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : cell
      )
    );

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    // TODO: Check for win or draw
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <BoardComponent board={board} handleMove={handleMove} />

      <div className="flex gap-5">Current Player: {currentPlayer}</div>
    </div>
  );
};
