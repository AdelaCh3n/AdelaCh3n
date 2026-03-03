// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let valueR = 232;
let valueG = 240;
let valueB = 165;

function setup() {
  createCanvas(500, 800);
  angleMode(DEGREES);
}

function drawSun(){
  push();
  noStroke();
  fill (255, 68, 0);
  // change the origin to top middle and move up 50 pixels
  translate(width/2,-50);

  // let it rotate
  let angle = frameCount * .28;
  rotate(angle);

  //triangles around the sun
  //i dont know why im using quad() but
  quad (-45, 150, 45, 150, 0, 800);//1
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//2
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//3
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//4
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//5
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//6
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//7
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//8
  rotate(36);

  quad (-45, 150, 45, 150, 0, 800);//9
  rotate(36);
  
  quad (-45, 150, 45, 150, 0, 800);//10
  rotate(36);

  

  //the circle
  circle (0, 0, 320);
  pop();

}

function drawBackground(){
  noStroke();

  // the ground
  fill (218, 230, 197); // back one
  circle (-300, 1500, 2000);
  fill (184, 207, 190);// front one
  circle (400, 1200, 1200);

  // the house in the front
  fill(97, 145, 111);// left house
  quad(300 ,580, 320, 580, 320, 630, 280, 630);
  fill(86, 125, 108);// left roof
  quad(290, 580, 320, 580, 320, 560);
  fill(113, 163, 108);//right house
  quad(320, 595, 340, 595, 345, 630, 320, 630);
  fill(94, 133, 106);//right roof
  quad(320, 595, 345, 595, 320, 570);

  // house at the back
  fill(195, 204, 169);//house
  quad(100 ,560, 120, 560, 120, 610, 100, 600);
  fill(180, 186, 149);//roof
  quad(95, 560,105, 545, 115, 550, 125, 560);

}

function drawCloud(){
  let cx = mouseX ; 
  let cy = 250 ;
  fill (250,250,250);//white cloud
  circle (cx, cy, 40);
  circle (cx+20, cy-14, 55);
  circle (cx-20, cy+20, 40);
  circle (cx+12, cy+18, 56);
  circle (cx+40, cy+10, 75);
  circle (cx+70, cy+20, 48);

  cy = 200;
  fill (242, 242, 235);//grey cloud
  circle (cx+200, cy+110, 30);
  circle (cx+220, cy+99, 45);
  circle (cx+180, cy+110, 30);
  circle (cx+212, cy+118, 50);
  circle (cx+240, cy+115, 60);
  circle (cx+270, cy+120, 38);
  

}

//change sky color
function mouseClicked() {
  if (valueR === 232 && valueG === 240 && valueB === 165) {
    valueR = 250;
    valueG = 207;
    valueB = 87;
  } else {
    valueR = 232;
    valueG = 240;
    valueB = 165;
  }
}

function draw() {
  background(valueR, valueG, valueB);
  drawSun();
  drawCloud();
  drawBackground();

  //sign
  fill(115, 128, 122) ;
  text("Adela", 10, 790);
}

