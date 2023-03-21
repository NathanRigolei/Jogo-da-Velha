let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;
let moveTo = [];

function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (gameOver == false) {
    if (board[position] == undefined) {
      board[position] = symbols[playerTime];
      gameOver = isWin();
      isDraw();
      if (position != "") {
        if (playerTime == 0) {
          playerTime = 1;
        } else {
          playerTime = 0;
        }
      }
    }
  }
  return gameOver;
}
function move(celula) {
  if (celula.textContent.trim() === "" && !moveTo.includes(celula.id)) {
    moveTo.push(celula.id);
  }
  isWin();
}

function isWin() {
  let winStates = [
    ["s1", "s2", "s3"],
    ["s4", "s5", "s6"],
    ["s7", "s8", "s9"],
    ["s1", "s4", "s7"],
    ["s2", "s5", "s8"],
    ["s3", "s6", "s9"],
    ["s1", "s5", "s9"],
    ["s3", "s5", "s7"],
  ];
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];
    let counter = 0;
    for (let j = 0; j < seq.length; j++) {
      if (moveTo.indexOf(seq[j]) !== -1) {
        counter++;
      }
    }
    if (
      counter === 3 &&
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      let sequenceElements = [
        document.getElementById(pos1),
        document.getElementById(pos2),
        document.getElementById(pos3),
      ];
      let width = window.screen.width;

      if (width <= 440) {
        sequenceElements.forEach((element) => {
          element.classList.add("win-sequence");
        });
      }

      setTimeout(function mainExit() {
        main.classList.add("main-end");
      }, 600);
      setTimeout(function resultMenu() {
        let back = document.getElementById("back");
        let msg = document.getElementById("msg");
        if (board[pos1] == "o") {
          msg.innerHTML = `O time <span id="color-symbol">O</span> ganhou`;
        } else {
          msg.innerHTML = `O time <span id="color-symbol">X</span> ganhou`;
        }
        back.style.display = "block";
      }, 700);

      if (
        ["s1", "s4", "s7"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineLeftVetical = document.getElementById("line-left-vetical");
        lineLeftVetical.style.display = "block";
      }
      if (
        ["s2", "s5", "s8"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineCenterVetical = document.getElementById("line-center-vetical");
        lineCenterVetical.style.display = "block";
      }
      if (
        ["s3", "s6", "s9"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineRightVetical = document.getElementById("line-right-vetical");
        lineRightVetical.style.display = "block";
      }
      if (
        ["s1", "s2", "s3"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineTopHorizontal = document.getElementById("line-top-horizontal");
        lineTopHorizontal.style.display = "block";
      }
      if (
        ["s4", "s5", "s6"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineCenterHorizontal = document.getElementById(
          "line-center-horizontal"
        );
        lineCenterHorizontal.style.display = "block";
      }
      if (
        ["s7", "s8", "s9"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineBottomHorizontal = document.getElementById(
          "line-bottom-horizontal"
        );
        lineBottomHorizontal.style.display = "block";
      }
      if (
        ["s1", "s5", "s9"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineDiagonalToRight = document.getElementById(
          "line-diagonal-right"
        );
        lineDiagonalToRight.style.display = "block";
      }
      if (
        ["s3", "s5", "s7"].every(
          (item, index) => item === [pos1, pos2, pos3][index] && width >= 441
        )
      ) {
        let lineDiagonalToLeft = document.getElementById("line-diagonal-left");
        lineDiagonalToLeft.style.display = "block";
      }
      return true;
    }
  }
  return false;
}

function isDraw() {
  if (moveTo.length == 9 && gameOver == false) {
    setTimeout(function fef() {
      main.classList.add("main-end");
    }, 300);
    setTimeout(function verify() {
      msg.innerHTML = `O jogo Empatou`;
      back.style.display = "block";
    }, 400);
  }
}
