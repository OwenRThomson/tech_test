import React from "react";
import { XorO } from "../types";

export default function Cell({ column }: { column: XorO | null }) {
  return (
    <button className="border-2 border-primary-600 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex">
      {column}
    </button>
  );
}

// Notes:
// - Made it a button rather than the original div to make it more accessible
