// find the small circle
// Adela
// 3/5/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 10;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeCircles();
}



function makeCircles() {
  let count = 0;
  while (count < NUM_CIRCLES) {
    let x_ = random(0, width);
    let y_ = random(0, height);
    let s_ = random(10, 150);
    let c = { x: x_, y: y_, s: s_ };
    circles.push(c);
    count++
  }
}


function renderCircles() {
  let smallest = circles[0].s;
  let smallestY = circles[9].y;
  for (let c of circles) {
    noFill();
    circle(c.x, c.y, c.s);
    //check is it the smallest
    if (c.s <= smallest) {
      smallest = c.s;
      smallestY = c.y;
    }
    
  }
  fill(0);
  stroke(0,255,255);
  line(0, smallestY. width, smallestY)
  text(smallest, width / 2, height / 2);
  stroke(0);strokeWeight(1);
}


function draw() {
  background(220);
  renderCircles();
}
