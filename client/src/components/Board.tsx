import React from "react";
import Cell from "./Cell";
import { Board } from "../types";

export default function Board({
  board,
  handleMove,
}: {
  board: Board;
  handleMove: (row: number, col: number) => void;
}) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => handleMove(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Notes:
