import React from "react";
import { XorO } from "../types";

export default function BoardHeader({
  currentPlayer,
}: {
  currentPlayer: XorO;
}) {
  return (
    <div className="flex items-center flex-col space-y-4">
      <div className="flex gap-5 text-xl">
        <div
          className={`p-4 rounded-md text-white font-bold ${
            currentPlayer === "X" ? "bg-primary-500" : "bg-gray-300"
          }`}
        >
          Player 1 (X)
        </div>
        <div
          className={`p-4 rounded-md text-white font-bold ${
            currentPlayer === "O" ? "bg-primary-500" : "bg-gray-300"
          }`}
        >
          Player 2 (O)
        </div>
      </div>
    </div>
  );
}

// Notes:
// - I could break this down further into a Player component, but I think it's unnecessary for now
