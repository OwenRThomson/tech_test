import React from "react";
import { EndState, XorO } from "../types";

export default function BoardFooter({
  endState,
  onRestart,
}: {
  endState: EndState;
  onRestart: () => void;
}) {
  return (
    <div className="bg-primary-100 w-40 text-center text-primary-500 font-bold rounded-md p-4">
      Game Over: {endState}
      <button
        className="bg-primary-500 text-white rounded-md p-2 mt-4"
        onClick={onRestart}
      >
        Restart
      </button>
    </div>
  );
}
