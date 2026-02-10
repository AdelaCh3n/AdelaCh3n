// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Global Variable
textShade = 200;
textScale = 10;
bgcolor = "grey";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // this function will report some
  // system variables related to mouse
  // onto the screen via text()

  // mouseX , mouseY -> store currnt mouse pos
  // mouseIsPressed -> boolean: button pressed?
  //  good for mouseHELD events

  // try using mouseIsPressed to change size
  // mouseIsPressed will be chek 4-10 times per click event
  if(mouseIsPressed){
    textScale = int(random(10, 50)); //(10-99)
  
  }


  textSize(textScale);
  fill(textShade);
  text(mouseX + ", " + mouseY + "," + mouseIsPressed + ","  + mouseButton, mouseX, mouseY);
}

function displayKeyboard(){
  //we use this function to inspect some of p5's keyboard capabilities

  //keyIsPressed -> is a eyboard press?
  // key ->         last pressed key (con-coded)
  //KeyCode ->      last pressed code key As a Number
  if(keyIsPressed){
    if(key === " "){
      bgcolor = color(random(255),random(255), random(255));
    }
  }
  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + "," + key + "," + keyCode;
  text(t, width/2, height/2);
}


function mousePressed(){
  textShade = int (random(0, 200));
}
function keyPressed(){
  if (keyCode === 65){
    bgcolor = color(random(255),random(255), random(255));
  }
}

function draw() {
  // goal: keep draw() TIDY
  // system variabls related to the mouse
  // onto the screeen via text()

  background(200);
  displayKeyboard();
  keyPressed();

}
