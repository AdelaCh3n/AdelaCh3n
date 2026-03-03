// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variables
let shapeState = 0; // 0-circle   1-square
                    // 2-triangle 3-starbust

let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}




function manageTime(){
  // this function will reset our timer
  //(and update shapestate) once every 1000 milliseconds
  let elapsedTime = millis() - startTime;
  if (elapsedTime > 1000){
    updateState();
    startTime = millis();
  }
}

function keyPressed(){
  updateState();
}



function updateState(){
  shapeState ++ ;
  if(shapeState > 3) shapeState = 0;
}

function draw() {
  background(220);
  drawShape();
  manageTime();
}




function drawShape(){
  // function inspects the shapeState variable
  // and draws the appropriate shape on the canvas
  let x = width/2, y = height/2;
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      triangle(x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for(let i =0; i<30; i++){
        let x2 = random(x-80, x+80);
        let y2 = random(y-80, y+80);
        line(x,y,x2,y2);

      }
  }
}