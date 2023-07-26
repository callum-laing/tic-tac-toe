const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function printBoard() {
  for (let i = 0; i < 9; i += 3) {
    console.log(board[i] + " | " + board[i + 1] + " | " + board[i + 2]);
    console.log("--+---+--");
  }
}

function checkWinner(player) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
}
