// javascript
// var board;
// var playerO = "O";
// var playerX = "X";
// var currPlayer = playerO;
// var gameOver = false;

// window.onload = function () {
//   setGame();
// };

// function setGame() {
//   board = [
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//   ];

//   for (let r = 0; r < 3; r++) {
//     for (let c = 0; c < 3; c++) {
//       //<div id='0-0'></div>
//       let tile = document.createElement("div");
//       tile.id = r.toString() + "-" + c.toString();
//       tile.classList.add("tile");
//       if (r == 0 || r == 1) {
//         tile.classList.add("horizontal-line");
//       }
//       if (c == 0 || c == 1) {
//         tile.classList.add("vertical-line");
//       }
//       tile.addEventListener("click", setTile);
//       document.getElementById("board").append(tile);
//     }
//   }
// }

// function setTile() {
//   if (gameOver) {
//     return;
//   }

//   let coard = this.id.split("-");
//   let r = parseInt(coard[0]);
//   let c = parseInt(coard[1]);
//   if (board[r][c] != " ") {
//     return;
//   }

//   board[r][c] = currPlayer;
//   this.innerText = currPlayer;

//   if (currPlayer == playerO) {
//     currPlayer = playerX;
//   } else {
//     currPlayer = playerO;
//   }

//   checkWinner();
// }

// function checkWinner() {
//   //horizontali
//   for (let r = 0; r < 3; r++) {
//     if (
//       board[r][0] == board[r][1] &&
//       board[r][1] == board[r][2] &&
//       board[r][0] != " "
//     ) {
//       for (let i = 0; i < 3; i++) {
//         let tile = document.getElementById(r.toString() + "-" + i.toString());
//         tile.classList.add("winner");
//         document.getElementById(
//           "heding"
//         ).innerText = `${currPlayer} losse the game`;
//       }
//       gameOver = true;
//       return;
//     }
//   }

//   //verticali
//   for (let c = 0; c < 3; c++) {
//     if (
//       board[0][c] == board[1][c] &&
//       board[1][c] == board[2][c] &&
//       board[0][c] != " "
//     ) {
//       for (let i = 0; i < 3; i++) {
//         let tile = document.getElementById(i.toString() + "-" + c.toString());
//         tile.classList.add("winner");
//         document.getElementById(
//           "heding"
//         ).innerText = `${currPlayer} losse the game`;
//       }
//       gameOver = true;
//       return;
//     }
//   }
// }

let board;
let playerO = "O";
let playerX = "X";
let currPlayer = playerO;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");

      if (r == 0 || r == 1) {
        tile.classList.add("horizontal-line");
      }
      if (c == 0 || c == 1) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", setTile);
      document.getElementById("board").append(tile);
    }
  }
}

function setTile() {
  if (gameOver) {
    return;
  }

  let coard = this.id.split("-");
  let r = parseInt(coard[0]);
  let c = parseInt(coard[1]);

  if (board[r][c] != "") {
    return;
  }

  board[r][c] = currPlayer;
  this.innerText = currPlayer;

  if (currPlayer == playerO) {
    currPlayer = playerX;
  } else {
    currPlayer = playerO;
  }

  chekWinner();
}

function chekWinner() {
  //horizotaly
  for (let r = 0; r < 3; r++) {
    if (
      board[r][0] == board[r][1] &&
      board[r][1] == board[r][2] &&
      board[r][2] != ""
    ) {
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementById(r.toString() + "-" + i.toString());
        tile.classList.add("winner");
      }
    }
  }

  //verticaly
  for (let c = 0; c < 3; c++) {
    if (
      board[0][c] == board[1][c] &&
      board[1][c] == board[2][c] &&
      board[2][c] != ""
    ) {
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementById(i.toString() + "-" + c.toString());
        tile.classList.add("winner");
        gameOver = true;
        // chekAllBoard();
      }
    }
  }

  //digonaly

  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[2][2] != ""
  ) {
    for (let i = 0; i < 3; i++) {
      let tile = document.getElementById(i.toString() + "-" + i.toString());
      tile.classList.add("winner");
    }
    gameOver = true;
    // chekAllBoard();
  }

  // anti digonay
  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[2][0] != ""
  ) {
    let tile = document.getElementById("0-2");
    tile.classList.add("winner");

    tile = document.getElementById("1-1");
    tile.classList.add("winner");

    tile = document.getElementById("2-0");
    tile.classList.add("winner");
    gameOver = true;

    // chekAllBoard();
  }

  //check board is full or not

  // chekAllBoard();
  if (
    board[0][0] != "" &&
    board[0][1] != "" &&
    board[0][2] != "" &&
    board[1][0] != "" &&
    board[1][1] != "" &&
    board[1][2] != "" &&
    board[2][0] != "" &&
    board[2][1] != "" &&
    board[2][2] != ""
  ) {
    setTimeout(() => {
      for (let c = 0; c < 3; c++) {
        for (let i = 0; i < 3; i++) {
          let tile = document.getElementById(i.toString() + "-" + c.toString());
          tile.innerText = " ";
          tile.classList.remove("winner");

          document.getElementById("heding").innerText = `Let's try again`;
        }
      }
      gameOver = false;
    }, 3000);
  }
}

function chekAllBoard() {}
