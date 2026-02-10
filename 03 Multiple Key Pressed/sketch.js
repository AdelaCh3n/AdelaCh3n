// Multiple Keypress Detection and Drawing Practice
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function checkMulti(){
  // a function to demonstrate how we can check if multiple keyboard buttons are pressed at once

  strokeWeight(mouseX / 30);
  stroke(150, 110, 125);
  // check for multiple keypresses (3 simult.)
  let a = keyIsDown(65);
  let b = keyIsDown(66);
  let c = keyIsDown(67);

  let str = "a: " + a + ", " + "b: " + b + ", " + "c: " + c;

  textSize(40);
  text(str, 100, 300);

}

function draw() {
  background(220);
  checkMulti();
}
