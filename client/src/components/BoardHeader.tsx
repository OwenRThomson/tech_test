import React from "react";
import { XorO } from "../types";
import { EndState, Score } from "../types";
import PlayerCard from "./PlayerCard";

export default function BoardHeader({
  currentPlayer,
  scores,
}: {
  currentPlayer: XorO;
  scores: Score[];
}) {
  // Simple function to get a given player's score
  const getScore = (player: EndState) =>
    scores?.find((score) => score.player_winner === player)?.count || 0;

  return (
    <div className="flex items-center flex-col space-y-4">
      <div className="flex gap-5 text-xl">
        <PlayerCard
          player="Player 1 (X)"
          isCurrent={currentPlayer === "X"}
          score={getScore("X")}
        />
        <PlayerCard
          player="Player 2 (O)"
          isCurrent={currentPlayer === "O"}
          score={getScore("O")}
        />
      </div>
    </div>
  );
}

// Notes:
// - I could break this down further into a Player component, but I think it's unnecessary for now
