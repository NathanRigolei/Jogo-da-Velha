document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  handleMove(position);
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];
    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
      let squaresWithO = document.querySelectorAll(".square .o");
      let squaresWithX = document.querySelectorAll(".square .x");
      squaresWithO.forEach((square) => {
        square.parentNode.classList.remove("sqr");
      });
      squaresWithX.forEach((square) => {
        square.parentNode.classList.remove("sqr");
      });
    }
  });
}

function start() {
  let start = document.getElementById("start");
  start.addEventListener("click", () => {
    start.classList.remove("start");
    start.classList.add("start-end");
    setTimeout(() => {
      main.style.display = "block";
    }, 650);
  });
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  moveTo = [];

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("win-sequence");
    square.classList.add("sqr");
  });

  let lineLeftVetical = document.getElementById("line-left-vetical");
  let lineCenterVetical = document.getElementById("line-center-vetical");
  let lineRightVetical = document.getElementById("line-right-vetical");
  let lineDiagonalToRight = document.getElementById("line-diagonal-right");
  let lineDiagonalToLeft = document.getElementById("line-diagonal-left");
  let lineTopHorizontal = document.getElementById("line-top-horizontal");
  let lineCenterHorizontal = document.getElementById("line-center-horizontal");
  let lineBottomHorizontal = document.getElementById("line-bottom-horizontal");

  let back = document.getElementById("back");

  lineLeftVetical.style.display = "none";
  lineCenterVetical.style.display = "none";
  lineRightVetical.style.display = "none";
  lineDiagonalToRight.style.display = "none";
  lineDiagonalToLeft.style.display = "none";
  lineTopHorizontal.style.display = "none";
  lineCenterHorizontal.style.display = "none";
  lineBottomHorizontal.style.display = "none";

  back.classList.add("back-end");

  setTimeout(function () {
    back.style.display = "none";
    back.classList.remove("back-end");
    back.classList.add("back");
    main.classList.remove("main-end");
  }, 770);
}

start();
