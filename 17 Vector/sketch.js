// Vector 
// Adela
// 4/13/2026
//
// Useful for modeling forces

let objects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //create obejcts
  
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  //process objects
  for(let o of objects){
    
    
    if (keyIsDown(32)){
      o.calcMouse();
    }
    o.move();
    o.display();
    
  }
}
class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), -5);
    this.force = createVector(0, 0.2); // gravity?
  }

  calcMouse(){
    //mouse vector " attractor" calculations

    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize();//set hyp to 1
    this.force.mult(4);
  }

  move() {
    
    //update velocity and pos vectors
    this.vel.add(this.force);
    this.vel.limit(20);//cant go outside -20 and 20
    this.pos.add(this.vel);

    //wall bounce
    if (this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }


  }

  display() {
    //display the ball
    noStroke();

    circle(this.pos.x, this.pos.y, 20);

    //display the vectors
    // if(true){
    //   stroke(255,0,0);
    //   line(0,0,this.pos.x, this.pos.y);

    //   let endX = this.pos.x + this.vel.x;
    //   let endY = this.pos.y + this.vel.y;

    //   stroke(0,0,255);
    //   line(this.pos.x,this.pos.y,endX,endY);

    //   stroke(0,255,0);
    //   line(endX, endY, endX + this.force.x, endY + this.force.y);
      
    // }

  }
}
