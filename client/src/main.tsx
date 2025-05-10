import React, { useState } from "react";
import { XorO, Board } from "./types";
import Cell from "./components/Cell";
import BoardComponent from "./components/Board";

export const Main = () => {
  const [board, setBoard] = useState<Board>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <BoardComponent board={board} />
    </div>
  );
};
