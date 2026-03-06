// Nested Loops
// Adela
// March 6
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bubbleSize = 20;
let bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}


function draw() {
  background(0);
  drawBubble();
}


function drawBubble() {
  // through through our array and display a bubble at 
  // each pos
  // possible delete if mouse is close
  //loop by index bc we want to be able to delete
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    textAlign(CENTER, CENTER);
    let d = eDist(b.x, b.y, mouseX, mouseY);
    // text(d, b.x, b.y);
  if(d< bubbleSize/2){
    bubbles.splice(i,1);
  }
  }

  function eDist(x1, y1, x2, y2) {
    // calculate the straight line distance
    let a = x1 - x2; let b = y1 - y2;
    let c = sqrt(pow(a, 2) + pow(b, 2))
    return round(c);
  }
  

}

function populateArray() {
  // simple nested loop test to make ordered pairs

  for (let x = 0; x <= height; x += bubbleSize) {
    //x: 0, 30, 60    y: 0, 30, 60
    for (let y = 0; y <= height; y += bubbleSize) {
      //   print(x, y);
      //   circle(x, y, 30);
      let b = { x: x, y: y }
      bubbles.push(b);
    }
  }
}
