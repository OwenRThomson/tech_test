import React from "react";
import { XorO } from "../types";

export default function Cell({
  value,
  onClick,
}: {
  value: XorO | null;
  onClick: () => void;
}) {
  return (
    <button
      className="border-2 border-gray-600 w-12 h-12 cursor-pointer items-center justify-center text-2xl font-bold flex"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// Notes:
// - Made it a button rather than the original div to make it more accessible
