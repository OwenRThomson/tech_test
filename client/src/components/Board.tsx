import React from "react";
import Cell from "./Cell";
import { Board } from "../types";

export default function Board({ board }: { board: Board }) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} column={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Notes:
