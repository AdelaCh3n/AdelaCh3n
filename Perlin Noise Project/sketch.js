// Perlin Noise Project
// Adela Chen
// March 4th 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let wid = 1;

let noiseTime = 12, noiseSpeed = 0.01;
let min = 0, max = 750;
function setup() {
  createCanvas(1000, 800);
  fill(0)
  // noLoop();
}

let offset = 0;

function generateTerrain() {
  //using a loop, construct a number
  //of side byside rectangles of 
  //random heigt, to be 2D terrain

  noiseTime = 12 + offset;
  offset += 0.05;

  let heighestY = 0;
  let heighestX = 0;

  let total = 0;
  let count =0;

  for (x = 0; x <= width; x += wid) {
    // generate noise() rectangle(negative height)

    let hei = noise(noiseTime);
    hei = map(hei, 0, 1, min, max);//mapping height

    strokeWeight(1);
    stroke("black");
    rect(x, height, wid, hei * -1);//draw the ractangles

    noiseTime += noiseSpeed;

    

    if (hei >= heighestY) {//find the heighest Y value
      heighestY = hei;
      heighestX = x;
    }
    total += hei;
    count ++;
    
  }

  let averageY = total / count;
  strokeWeight(10);
  stroke("red");
  line(0, averageY, 1000, averageY);
  if (keyIsDown(37)) {//left arrow
    wid -= 1;
  } else if (keyIsDown(39)) {//right arrow
    wid += 1;
  }
  strokeWeight(1);
  stroke("black");
  wid = constrain(wid, 1, 50);
  drawFlag(heighestX, 800 - heighestY);

}

function drawFlag(x, y) {

  line(x, y, x, y - 20);
  triangle(x, y - 10, x, y - 20, x + 10, y - 15);

}



function draw() {
  background(220);
  // frameRate(0);
  generateTerrain();

}
