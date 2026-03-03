// 06 MouseWheel, Map, Lerp
// Adela
// 2/26/2026 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cx, cy;
let tx, ty;
let sx, sy;
let diameter = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width/2;   cy = height/2;
  tx = width/2;  ty = height/2;
  sx = width/2;  sy = height/2;
  noFill();
  strokeWeight(3);
}
function mouseWheel(event){
  if(event.delta <0){// up
    diameter += 10;
  }
  else{
    diameter = max(10, diameter-10);
  }
}


function draw() {
  background(220, 50);
  cx = lerp(cx, mouseX, 0.2);
  cy = lerp(cy, mouseY, 0.2);
  tx = lerp(tx, mouseX, 0.01);
  ty = lerp(ty, mouseY, 0.01);
  sx = lerp(sx, mouseX, 0.03);
  sy = lerp(sy, mouseY, 0.03);
  // line(x, y, mouseX, mouseY);

  let r = map(cx, 0, width, 0, 255);
  let g = map(cy, 0, height, 0, 255);
  let b = 120;
  stroke(r,g,b);
  triangle(tx,ty, tx*0.035*diameter,ty, tx, diameter);
  r = map(tx, 0, width, 0, 255);
  g = 50;
  b = map(ty, 0, height, 0, 255);
  stroke(r,g,b);
  circle(cx, cy, diameter);
  r = 150;
  g = map(sx, 0, width, 0, 255);
  b = map(sy, 0, height, 0, 255);
  stroke(r,g,b);
  square(sx*0.9,sy*0.9, diameter);
}
