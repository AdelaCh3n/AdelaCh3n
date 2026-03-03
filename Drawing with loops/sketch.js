// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(600, 800);
}

function mouseCircle(){
  circle(mouseX, mouseY, 10);
}


function upLine(){
  //use this function to draw the upside
  let xStart = 0; // left corner
  let xEnd = width; // right corner
  let y = 0;
  let size = 20;
  for (let x = xStart; x < xEnd; x += 40){
    fill (250-x*0.1, 25, 90);
    triangle(x, y, x+40, y, mouseX, mouseY);
    circle(x, y, size);
    
  }
}

function rightLine(){
  //use this function to draw the right side
  let yStart = 0; // upright corner
  let yEnd = height; // downright corner
  let x = width;
  let size = 20;
  for (let y = yStart; y < yEnd; y += 40){
    fill (230, 120-y*0.1, 70);
    triangle(x, y, x, y+40, mouseX, mouseY);
    circle(x, y, size);
    
  }
}
function bottomLine(){
  //use this function to draw the right side
  let xStart = width; // bottom right corner
  let xEnd = 0; // bottom left corner
  let y = height;
  let size = 20;
  for (let x = xStart; x > xEnd; x -= 40){
    fill (245, 250-x*0.3, 150-x*0.1);
    triangle(x, y, x-40, y, mouseX, mouseY);
    circle(x, y, size);
    
  }
}


function leftLine(){
  //use this function to draw the right side
  let yStart = height; // upright corner
  let yEnd = 0; // downright corner
  let x = 0;
  let size = 20;
  for (let y = yStart; y > yEnd; y -= 40){
    fill (150+y*0.1, 135, 75);
    triangle(x, y, x, y-40, mouseX, mouseY);
    circle(x, y, size);
    
  }
}


function draw() {
  background(220);
  
  upLine();
  rightLine();
  bottomLine();
  leftLine();
  mouseCircle();
}
