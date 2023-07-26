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

  for (const combination of winningCombination) {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      return true;
    }
  }
  return false;
}

function isBoardFull() {
  return board.every((cell) => cell !== "");
}

function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById("cell-" + index).textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
      alert(currentPlayer + " wins!");
      resetBoard();
    } else if (isBoardFull()) {
      alert("It's a tie!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (currentPlayer === "O") {
        computerMove();
      }
    }
  }
}

function computerMove() {
  const emptyCells = board.reduce((acc, cell, index) => {
    if (cell === "") {
      acc.push(index);
    }
    return acc;
  }, []);

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  makeMove(emptyCells[randomIndex]);
}

function resetBoard() {
  for (let i = 0; i < 9; i++) {
    board[i] = "";
    document.getElementById("cell-" + i).textContent = "";
  }
  currentPlayer = "X";
}

document.querySelectorAll("td").forEach((cell, index) => {
  cell.addEventListener("click", () => makeMove(index));
});
