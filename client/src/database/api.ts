import { EndState, GameResult, Score } from "../types";
import { fetchWithErrorHandling } from "./fetch";
import { NetworkResult } from "./types";

export const saveScore = async (
  player_winner: EndState
): Promise<NetworkResult<GameResult>> => {
  if (!player_winner)
    return {
      data: null,
      error: {
        message: "No winner has been provided",
        status: 400,
        statusText: "",
      },
    };

  return fetchWithErrorHandling("http://localhost:5000/api/v1/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ player_winner }),
  });
};

export const getScores = async (): Promise<NetworkResult<Score[]>> => {
  return fetchWithErrorHandling("http://localhost:5000/api/v1/games", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
