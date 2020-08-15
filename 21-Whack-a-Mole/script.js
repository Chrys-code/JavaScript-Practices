// Variables
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const btn = document.querySelector("button");

let prevHole;
let timeUp = false;
let score = 0;

//EventListeners
btn.addEventListener("click", gameStart);
moles.forEach((mole) => mole.addEventListener("click", wack));

//Functions
//Random hole
function getRandomHole() {
  const hole = holes[Math.floor(Math.random() * holes.length)];
  hole === prevHole ? getRandomHole(holes) : hole;
  prevHole = hole;
  return hole;
}

//pop up Timer
function timer(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

//Mole popup
function popUp() {
  const time = timer(1200, 600);
  const hole = getRandomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      popUp();
    }
  }, time);
}

//Game start
function gameStart() {
  timeUp = false;
  score = 0;
  scoreBoard.textContent = 0;
  btn.disabled = true;

  setTimeout(() => {
    timeUp = true;
    btn.disabled = false;
  }, 20000);
  popUp();
}

//Target onclick
function wack(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentElement.classList.remove("up");
  scoreBoard.textContent = score;
}
