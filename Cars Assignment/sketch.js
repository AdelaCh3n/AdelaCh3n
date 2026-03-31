// Cars Assignment
// Adela
// 3/27/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = []; 
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  // myVehicles = new vehicles(random(width), random(height), 0,  0, 20);
  for(let i = 0; i <= 20; i++){
    eastbound.push(new vehicles(0, random(0.22*height, 0.48*height), Math.floor(random(0,2)), 0, 2));
  }

  for(let i = 0; i <= 20; i++){
    westbound.push(new vehicles(width, random(0.52*height, 0.78*height), Math.floor(random(0,2)), 1, -2));
  }
}

function draw() {
  background(220);
  drawRoad();
  for( let i = 0; i < eastbound.length; i++){
    eastbound[i].action();
  }
  for( let i = 0; i < eastbound.length; i++){
    westbound[i].action();
  }

}
function drawCar(x, y, r, g, b) {
  stroke(0);
  fill(255);
  rect(x - 20, y, 15, 40);
  rect(x + 20, y, 15, 40);
  fill(r, g, b);
  rect(x, y, 70, 30);
}

function drawTruck(x, y, r, g, b) {
  stroke(0);
  fill(r, g, b);
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

// function mousePressed(){
//   if(keyIsPressed) myVehicles.push(new vehicles());

// }

class vehicles {
  //constructor
  constructor(x, y, type, direc, xSpeed) {
    this.x = x; this.y = y; this.type = type;
    this.r = random(255); this.g = random(255); this.b = random(255);
    this.direc = direc;
    this.xSpeed = xSpeed;
    

  }

  //display
  display() {

    if(this.type === 0){//car
      drawCar(this.x, this.y, this.r, this.g, this.b);
      }

    else if(this.type === 1)//truck
      drawTruck(this.x, this.y, this.r, this.g, this.b); 
        
    }
  

  move() {
    this.xSpeed = constrain(this.xSpeed, -20, 20);
    this.x += this.xSpeed;

    if(this.direc === 0){//right
      if(this.xSpeed <= 1) this.xSpeed = 1;
    } 
    
    else if (this.direc === 1){//left
      if(this.xSpeed >= -1) this.xSpeed = -1;
    }
    
    if(this.x > width) this.x = 0;
    if(this.x < 0) this.x = width;
    
  }

  speedUp(){
    
    if(this.direc === 0){//right
      this.xSpeed += random(15);
      
      
    } 
    else if (this.direc === 1){//left
      this.xSpeed -= random(15);
      
    } 

  }

  speedDown(){
    
    if(this.direc === 0){//right
      this.xSpeed -= random(15);  
      
    } 
    else if (this.direc === 1){//left
      this.xSpeed += random(15);
      
    }

  }

  changeColor(){

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    fill(this.r,this.g,this.b);
    
  }

  action(){
    this.move();
    this.display();
    
    if (random(1) < 0.01) {
      this.speedUp();
    }
    if (random(1) < 0.01) {
      this.speedDown();
    }
    if (random(1) < 0.01) {
      this.changeColor();
    }
  }
}