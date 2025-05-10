import React from "react";

export default function PlayerCard({
  player,
  isCurrent,
  score,
}: {
  player: string;
  isCurrent: boolean;
  score: number;
}) {
  return (
    <div
      className={`p-4 rounded-md text-white font-bold ${
        isCurrent ? "bg-primary-500" : "bg-gray-300"
      }`}
    >
      {player}
      <div className="mt-2 text-sm">Score: {score}</div>
    </div>
  );
}
