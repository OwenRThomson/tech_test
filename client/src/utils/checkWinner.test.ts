import { checkWinner } from "./checkWinner";
import { Board } from "../types";

describe("checkWinner [3x3]", () => {
  it("should return 'X' when X wins in a row", () => {
    const board: Board = [
      ["X", "X", "X"],
      [null, "O", null],
      ["O", null, null],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  it("should return 'O' when O wins in a column", () => {
    const board: Board = [
      ["X", "O", null],
      [null, "O", "X"],
      ["X", "O", null],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  it("should return 'X' when X wins in a lowered diagonal", () => {
    const board: Board = [
      ["X", null, null],
      [null, "X", "O"],
      ["O", null, "X"],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  it("should return 'O' when O wins in a raised diagonal", () => {
    const board: Board = [
      ["X", null, "O"],
      ["X", "O", null],
      ["O", null, "X"],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  it("should return 'Draw' when the board is full with no winner", () => {
    const board: Board = [
      ["X", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ];
    expect(checkWinner(board)).toBe("Draw");
  });

  it("should return null when there is no winner and the board is not full", () => {
    const board: Board = [
      ["X", null, "O"],
      ["X", "O", null],
      [null, null, "X"],
    ];
    expect(checkWinner(board)).toBe(null);
  });
});

describe("checkWinner [10x10]", () => {
  it("should return 'X' when X wins in a row", () => {
    const board: Board = [
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      [null, "O", null, null, null, null, null, null, null, null],
      ["O", null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  it("should return 'O' when O wins in a column", () => {
    const board: Board = [
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      [null, "O", null, null, null, null, null, null, null, null],
      ["O", null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  it("should return 'X' when X wins in a lowered diagonal", () => {
    const board: Board = [
      ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      [null, "X", null, null, null, null, null, null, null, null],
      ["O", null, "X", null, null, null, null, null, null, null],
      [null, null, null, "X", null, null, null, null, null, null],
      [null, null, null, null, "X", null, null, null, null, null],
      [null, null, null, null, null, "X", null, null, null, null],
      [null, null, null, null, null, null, "X", null, null, null],
      [null, null, null, null, null, null, null, "X", null, null],
      [null, null, null, null, null, null, null, null, "X", null],
      [null, null, null, null, null, null, null, null, null, "X"],
    ];
    expect(checkWinner(board)).toBe("X");
  });

  it("should return 'O' when O wins in a raised diagonal", () => {
    const board: Board = [
      ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      [null, "X", null, null, null, null, null, null, "O", null],
      ["O", null, "X", null, null, null, null, "O", null, null],
      [null, null, null, "X", null, null, "O", null, null, null],
      [null, null, null, null, "O", "O", null, null, null, null],
      [null, null, null, null, "O", "X", null, null, null, null],
      [null, null, null, "O", null, null, "X", null, null, null],
      [null, null, "O", null, null, null, null, "X", null, null],
      [null, "O", null, null, null, null, null, null, "X", null],
      ["O", null, null, null, null, null, null, null, null, "X"],
    ];
    expect(checkWinner(board)).toBe("O");
  });

  it("should return null when there is no winner and the board is not full", () => {
    const board: Board = [
      ["X", "O", "O", "O", "O", "O", "O", "O", "O", "X"],
      [null, "X", null, null, null, null, null, null, "O", null],
      ["O", null, "X", null, null, null, null, "O", null, null],
      [null, null, null, "X", null, null, "O", null, null, null],
      [null, null, null, null, "X", "O", null, null, null, null],
      [null, null, null, null, "O", "X", null, null, null, null],
      [null, null, null, "O", null, null, "X", null, null, null],
      [null, null, "O", null, null, null, null, "X", null, null],
      [null, "O", null, null, null, null, null, null, "X", null],
      ["O", null, null, null, null, null, null, null, null, "O"],
    ];
    expect(checkWinner(board)).toBe(null);
  });
});
