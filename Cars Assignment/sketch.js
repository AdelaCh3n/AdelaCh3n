// Cars Assignment
// Adela
// 3/27/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawRoad();
  

}
function drawCar(x, y, c) {
  stroke(0);
  fill(255);
  rect(x - 20, y, 15, 40);
  rect(x + 20, y, 15, 40);
  fill(c);
  rect(x, y, 70, 30);
}

function drawTruck(x, y, c) {
  stroke(0);
  fill(c);
  rect(x, y, 80, 40);
  line(x, y - 20, x, y + 20);
}

function drawRoad() {
  push();
  fill(0);
  translate(width / 2, height / 2);
  rect(0, 0, width, height * 0.6);
  for (let i = 0 - width / 2; i < width + 50; i += 50) {
    stroke(255);
    strokeWeight(3);
    line(i, 0, i + 30, 0);
  }

  pop();

}

class vehicles {
  //constructor
  constructor(x, y, type, color, direc, xSpeed) {
    this.x = x; this.y = y; this.type = type;
    this.color = color; this.direc = direc;
    this.xSpeed = xSpeed;

  }

  //display
  display() {

    if(this.type === 0){//car
      drawCar(this.x, this.y, this.color);
      }

    else if(this.type === 1)//truck
      drawTruck(this.x, this.y, this.color); 
        
    }
  

  move() {
    this.x += this.xSpeed;
  }

  speedUp(){
    if(this.direc === 0){//right
      this.xSpeed += 15;
    } 
    else if (this.direc === 1){//left
      this.xSpeed -=15;
    } 
  }
}