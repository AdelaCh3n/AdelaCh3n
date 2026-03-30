// Planets and Moons
// Adela
// 3/26/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variables
let myPlanet = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0,5);
  noStroke();
  myPlanet.display();
}

class Moon{
    constructor(){
      this.speed = random(1,50);
      this.angle = 0;
      this.orbitRadius = random(0, 1000);
      this.s = random(10,20);
      
    }

    //class methods
    move(){
      this.angle += this.speed;
    }

    display(x,y){
      push();
      translate(x,y);
      rotate(this.angle);
      fill(random(100, 255),random(100, 155),random(2000));
      circle(this.orbitRadius, 0, this.s);
      pop();
    }

    update(x,y){
      //helper method to handle all internal method calls
      this.move();
      this.display(x,y);
    }
}

function mousePressed(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  myPlanet.createMoon();
}
function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet {
  //constructor
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  //class methods
  createMoon() {
    this.moons.push(new Moon());
  }

  display() {
    fill("black");
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of this.moons){
      m.update(this.x, this.y);
    }
  }

  
}
