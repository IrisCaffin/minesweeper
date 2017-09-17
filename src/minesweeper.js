<<<<<<< HEAD
const printBoard = board => {
  console.log("Current Board:");
  console.log(board[0].join(" | "));
  console.log(board[1].join(" | "));
  console.log(board[2].join(" | "));
};
const board = [
  [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "] ],
  [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "] ],
  [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "] ]
];
printBoard(board);
board[0][1] = "1";
board[2][2] = "B";
printBoard(board);
=======
const blankLine = "  |   |  ";
console.log("This is what an empty board would look like:");
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

const guessLine = "1 |   |  ";
const bombLine = "  | B |  ";

console.log("This is what a board with a guess and a bomb on it would look like");
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
>>>>>>> 709faa0a931b68e9b4404250d33e6a0e7fb69ce9
