// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variable
let ball, ball2;


function setup() {
  createCanvas(windowWidth, windowHeight);

  ball = {
    x: 300, y: 400, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.08
  }

  ball2 = {
    x: 300, y: 400, size: 30,
    c: color(random(120), random(120), random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.1
  }

}

function moveBall(b) {
  //b -> ball type object
  // update the position and draw the bal

  // generate how to change X and y position(noise)
  let dx = noise(b.timeX);//0-1
  dx = map(dx, 0, 1, -5, 5);//dx: -5 to 5
  let dy = noise(b.timeY);//0-1
  dy = map(dy, 0, 1, -5, 5);//dx: -5 to 5

  //advance our noise graph " cursors"
  b.timeX += b.timeOff; b.timeY += b.timeOff;
  //update the position
  b.x += dx; b.y += dy;

  //corections ( wrap around)
  if (b.x < 0) b.x = width;
  else if (b.x > width) b.x = 0

  if (b.y < 0) b.y = height;
  else if (b.y > height) b.y = 0

  //render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}

function draw() {
  //background(220);
  noStroke();
  moveBall(ball);
  moveBall(ball2);
}

