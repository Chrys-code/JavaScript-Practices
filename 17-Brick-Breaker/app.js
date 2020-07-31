//Variables
const canvas = document.querySelector("#mycanvas");

//Canvas
let ctx = canvas.getContext("2d");

//Ball
const ballRadius = 6;
let x = canvas.width / 2;
let y = canvas.height - 40;
let dx = 4;
let dy = -4;

//Pad
const pad_width = 10 * 6;
const pad_height = 2 * 6;
//Pad starting:
let padX = (canvas.width - pad_width) / 2;
//Bricks
const brickColumns = 7;
const brickRows = 5;
const brick_width = 12 * 6;
const brick_height = 3 * 6;
const brick_padding = 2 * 6;
const brick_offsetTop = 5 * 6;
const brick_offsetLeft = 5 * 6;
//Creating arrays for bricks *copied
let bricks = [];
for (col = 0; col < brickColumns; col++) {
  bricks[col] = [];
  for (row = 0; row < brickRows; row++) {
    //set the x and y position of the bricks
    bricks[col][row] = { x: 0, y: 0, status: 1 };
  }
}

let score = 0;

//Pad Navigation
let arrow_rightPressed = false;
let arrow_leftPressed = false;

//EventListeners
//Arrows -> keydown and keyup
document.addEventListener("keydown", padKeyDownMove);
document.addEventListener("keyup", padKeyUpMove);

//Functions
//Pad movement
function padKeyDownMove(e) {
  if (e.keyCode === 37) {
    arrow_leftPressed = true;
  } else if (e.keyCode === 39) {
    arrow_rightPressed = true;
  }
}

function padKeyUpMove(e) {
  if (e.keyCode === 37) {
    arrow_leftPressed = false;
  } else if (e.keyCode === 39) {
    arrow_rightPressed = false;
  }
}

//Draw pad
function drawPad() {
  ctx.beginPath();
  ctx.rect(padX, canvas.height - pad_height, pad_width, pad_height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

//Draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}
//Ball movement
//Draw bricks
function drawBrick() {
  for (col = 0; col < brickColumns; col++) {
    for (row = 0; row < brickRows; row++) {
      if (bricks[col][row].status === 1) {
        let brickX = col * (brick_width + brick_padding) + brick_offsetLeft;
        let brickY = row * (brick_height + brick_padding) + brick_offsetTop;
        bricks[col][row].x = brickX;
        bricks[col][row].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick_width, brick_height);
        ctx.fillStyle = "#6600cc";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "brown";
  ctx.fillText("score: " + score, 8, 20); //position score at 8,20 on the x,y axis of the canvas
}

function collisionDetection() {
  for (col = 0; col < brickColumns; col++) {
    for (row = 0; row < brickRows; row++) {
      let b = bricks[col][row];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brick_width &&
          y > b.y &&
          y < b.y + brick_height
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRows * brickColumns) {
            alert("Congratulations!! You've won!");
            document.location.reload();
          }
        }
      }
    }
  }
}
//Call draw* functions in a draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPad();
  drawBall();
  drawBrick();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  //top walls
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    //detect paddle hits
    if (x > padX && x < padX + pad_width) {
      dy = -dy;
    }
    //if no paddle hit, body of canvas is hit ==> game over
    else {
      alert("GAME OVER!!");
      document.location.reload();
    }
  }

  //bottom wall
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  //Make paddle move
  if (arrow_leftPressed && padX > 0) {
    padX -= 7;
  } else if (arrow_rightPressed && padX < canvas.width - pad_width) {
    padX += 7;
  }
  //Making the ball move
  //Making the ball move
  x += dx; //update x movement every frame
  y += dy; //update y movement every frame
}
//Game loop /draw
setInterval(draw, 20);
