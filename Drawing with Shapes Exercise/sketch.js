// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(1000, 720);
  
}



function drawAlien(){

  let headSize = mouseY;
  
  let cr = headSize;
  cr = constrain(cr, 5, cr);
  let cx = mouseX;
  cx = constrain(cx, mouseY ,720);
  let cy = mouseY;
  

  // a circle (x, y, r)
    // cx, cy, cr
    // stroke color = fill color
    
  fill (200, 100, 120);
  stroke (200, 100, 120)
  circle (cx, cy, cr);
  

  // a big rectangle(x, y, w, h,)

  rect (cx - cr/2, cy , cr, cr/2);

  // 2 thin rectanges (x, y, w, h)
    // x = cx - cr/2 , y = cy-cr, w = cr/8, h = 2cr
  rect (cx - cr/2, cy + cr/2, cr/8, cr/4);
  rect (cx + 3*cr/8, cy + cr/2, cr/8, cr/4);
  // 2 small circles (x, y, r)
    // stroke color = fill color = black
    // 1) x = cx - cr/2 - r, y = cy, r = cr/10?
  fill ( 0, 0, 0);
  circle (cx - cr/4, y = cy, cr/8);
    // 2) x = cx + cr/2 + r, y = cy, r = cr/10?
  circle (cx + cr/4, y = cy, cr/8);
  // 1 line (x1, y1, x2, y2)
    // (x1, y1) to (x2, y2)
    // x1 = cx - cr/2, y1 = cy - cr/4
    // x2 = cx + cr/2, y1 = cy - cr/4
  stroke (0,0,0);
  strokeWeight(cy/100);
  line (cx - cr/4 + cr/8, cy + cr/6, cx + cr/4 - cr/8, cy + cr/6 );


}

function drawBackground(){
  fill (218, 224, 103);
  noStroke();
  quad(480, 20, 520, 20, 1000, 720, 0, 720);
  fill (241, 245, 223);
  rect(480, 0, 40, 20);
  fill (247, 103, 77);
  quad(0, 0, 0, 720, 480, 20, 480, 0);
  quad(1000, 0, 1000, 720, 520, 20, 520, 0);
}

function draw() {
  background(250);
  drawBackground();
  drawAlien();
  
}
