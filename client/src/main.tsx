import React, { useState } from "react";
import { XorO, Board, EndState, Score } from "./types";
import BoardComponent from "./components/Board";
import { checkWinner } from "./utils/checkWinner";
import BoardHeader from "./components/BoardHeader";
import BoardFooter from "./components/BoardFooter";
import { useEffect } from "react";
import { getScores, saveScore } from "./database/api";

export const Main = () => {
  const [gameSize, setGameSize] = useState(3); // Make gameSize dynamic

  const [board, setBoard] = useState<Board>(
    Array.from({ length: gameSize }, () => Array(gameSize).fill(null))
  );

  const [currentPlayer, setCurrentPlayer] = useState<XorO>("X");
  const [endState, setEndState] = useState<EndState>(null); // Track the win state
  const [scores, setScores] = useState<Score[]>([]); // Track scores

  // Fetch scores when the component mounts
  useEffect(() => {
    const fetchScores = async () => {
      const { data, error } = await getScores();
      if (error) {
        console.error("Error fetching scores:", error);
        alert(`Error fetching scores: ${error.message}`);
        return;
      }
      setScores(data);
    };

    fetchScores();
  }, []);

  const handleGameSizeChange = (newSize: number) => {
    setGameSize(newSize);
    setBoard(Array.from({ length: newSize }, () => Array(newSize).fill(null)));
    setEndState(null);
  };

  const handleMove = async (row: number, col: number) => {
    if (board[row][col] !== null) return; // TODO: Add user feedback, Skip go? Idk I think if you're stupid enough to click a taken cell you deserve to lose your turn!

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : cell
      )
    );

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    let endState = checkWinner(newBoard);

    if (endState !== null) {
      setEndState(endState); // Update the win state
      /*
        Here I could just call the DB again to get the scores, but I think it's better to just update the state for snappy UI
      */
      setScores((prevScores) => {
        // Check if this winner already exists in scores
        const winnerExists = prevScores.some(
          (score) => score.player_winner === endState
        );

        if (winnerExists) {
          // someone has won before, increment
          return prevScores.map((score) =>
            score.player_winner === endState
              ? { ...score, count: score.count + 1 }
              : score
          );
        } else {
          return [...prevScores, { player_winner: endState, count: 1 }];
        }
      });

      const { error } = await saveScore(endState);

      if (error) {
        alert("Error saving score: " + error.message);
        return;
      }
    }
  };

  return (
    <div className="flex flex-row h-screen  items-center  justify-center">
      <div className="w-1/2 space-y-4 bg-primary-400 text-white h-full flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold ">Tic Tac Toe</h1>
        <p className="text-2xl ">
          A simple Tic Tac Toe game built with React and TypeScript.
        </p>

        <div className="space-x-4">
          <span className="font-semibold text-lg">Game Size:</span>
          <input
            className="font-semibold text-lg w-48 text-black rounded-md bg-primary-100 border-primary-400 appearance-none cursor-pointer"
            type="range"
            min="3"
            max="15"
            step="1"
            value={gameSize}
            onChange={(e) => {
              const newSize = parseInt(e.target.value, 10);
              handleGameSizeChange(newSize);
            }}
          />
        </div>
      </div>

      <div
        id="game-board"
        className="w-1/2 space-x-4 space-y-4 bg-white h-full flex items-center justify-center flex-col"
      >
        <BoardHeader currentPlayer={currentPlayer} scores={scores} />
        <BoardComponent board={board} handleMove={handleMove} />

        {endState && (
          <BoardFooter
            endState={endState}
            onRestart={() => {
              setBoard(
                Array.from({ length: gameSize }, () =>
                  Array(gameSize).fill(null)
                )
              );
              setEndState(null);
            }}
          />
        )}
      </div>
    </div>
  );
};
