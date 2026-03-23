// Snake
// Adela
// 3/12/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Globals
let x, y;
let postList = [];
const NUM_SEGMENTS = 250;


function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER)
  angleMode(DEGREES);
  x = width / 2; y = height / 2;
  for (let i = 0; i < NUM_SEGMENTS; i++) {
    postList.push({ x: x, y: y, r: frameCount });
  }
}

function renderSnake(){
  for(let p of postList){
    push();
    translate(p.x, p.y);
    rotate(p.r);
    square(0,0,20);
    pop();
    p.r += 2;

  }
}

function move(){
  if (keyIsDown(LEFT_ARROW)) x -= 4;
  if (keyIsDown(RIGHT_ARROW)) x += 4;
  if (keyIsDown(UP_ARROW)) y -= 4;
  if (keyIsDown(DOWN_ARROW)) y += 4;

  postList.splice(0,1);
  postList.push({x:x, y:y, r:frameCount})
}

function draw() {
  background(220);
  move();
  renderSnake();
}
