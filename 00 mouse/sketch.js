// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// In Python, we wroe "run-to-complextion"
//In p5.js, we write "interactive"
//  setup() -> runs once, at the start
// draw() -> runs over ad over(after setup)
                // targetig 60 timews per second
                //screem is updated at bottom of draw

// ---- Global Variable Section ----
// We can DECLARE variables here
// We can INITIALIZE variables here
//    simple data types
//    > dont have access to system variables
let circleX = 200;


function setup() {
  createCanvas(500, 400);
}

function draw() {
  // //repeats over and over (automatically) 60fps
  background(20);//wipes the screen
  // //     R    G    B
  // fill (200, 100, 120);
  // stroke("#00FF00");
//          x   y    dia
//   circle( circleX, 350, 50);
//   //second circle
//   fill (200, 165, 130);
//   noStroke(); //noFill():
//   circle(width/2, height/2, 140);
  fiveCircles();
}
function fiveCircles(){
  fill (300, 300, 120);
  circle(width/2, height/2, 50);
  circle(width*0.8, height*0.8, 50);
  circle(height*0.2, height*0.8, 50);
  circle(width*0.8, height*0.2, 50);
  circle(width*0.2, height*0.2, 50);
  circle(mouseX, height/2, 50);
}
