// Cars Assignment
// Adela
// 3/27/2026
//
// cars 

let eastbound = []; 
let westbound = [];
let traffic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  for(let i = 0; i <= 10; i++){
    eastbound.push(new vehicles(0, random(0.22*height, 0.48*height), Math.floor(random(0,2)), 0, 2));
  }
  
  for(let i = 0; i <= 10; i++){
    westbound.push(new vehicles(width, random(0.52*height, 0.78*height), Math.floor(random(0,2)), 1, -2));
  }
  traffic = new trafficLight();
}


function mousePressed(){
  if (mouseButton === LEFT){
    eastbound.push(new vehicles(0, random(0.22*height, 0.46*height), Math.floor(random(0,2)), 0, 2));
  }
  
  if (mouseButton === RIGHT){
    westbound.push(new vehicles(width, random(0.54*height, 0.78*height), Math.floor(random(0,2)), 1, -2));
  }
}





function draw() {
  background(220);
  drawRoad();
  for( let i = 0; i < eastbound.length; i++){
    eastbound[i].action();
  }
  for( let i = 0; i < westbound.length; i++){
    westbound[i].action();
  }

  traffic.display();
  
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

class trafficLight {
  constructor(){
    this.color = "green";
    this.count = 0;
  }

  display(){
    fill (this.color); 
    circle(60, 60, 100)
    this.checkLight();
    this.turnRed();
  }

  turnRed(){
    //change color, and set countdown to 120
    if(keyIsPressed && keyCode === 32){
      this.color = "red";
      this.count = 120 
    }
  
  }

  checkLight(){
    //if light is red, decrement count.
    //when count reaches 0 set back to green
    if(this.color === "red"){
      this.count --   
      if (this.count === 0){    
        this.color = "green";
      }
    }

  }
}

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

    if (traffic.color === "green"){

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
    else{
      this.xSpeed = 0;
    }
    
    
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