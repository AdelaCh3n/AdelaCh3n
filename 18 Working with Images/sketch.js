// working with images
// Adela
// 4/14/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0;// pinwheel curr index

async function loadAssets() {
  //load lions
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //pinwheel image
  for ( let i = 0; i <= 8; i ++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  pinImages.push(loadImage("assets/pin-00.png"));
  pinImages.push(loadImage("assets/pin-01.png"));
  pinImages.push(loadImage("assets/pin-02.png"));
  pinImages.push(loadImage("assets/pin-03.png"));
  pinImages.push(loadImage("assets/pin-04.png"));
  pinImages.push(loadImage("assets/pin-05.png"));
  pinImages.push(loadImage("assets/pin-06.png"));
  pinImages.push(loadImage("assets/pin-07.png"));
  pinImages.push(loadImage("assets/pin-08.png"));

}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER);
  noCursor();
}

function draw() {
  background(220);
  lion();
  pinwheel();
  
}

function lion(){
  // update state variable based on mouse movement
  if (movedX < 0) dir = "left";
  if (movedX > 0) dir = "right";

  // interpreting the state variable
  if ( dir === "left"){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }

}// screen update here

function pinwheel(){

  image(pinImages[current], width/2,height*0.7);
  if ( frameCount % 2 ===0){ //frame limit logic
    current = (current + 1) % 9;
  }
  

  



  // CANT ANIMATE WITH FOR LOOP
  // for( let i = 0; i <= 8; i++){
  //   image(pinImages[i], width/2,height*0.7);
  // }

}
