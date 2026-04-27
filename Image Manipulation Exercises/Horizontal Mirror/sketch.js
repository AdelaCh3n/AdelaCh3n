// Map Manipulation
// Adela
// 4/22/2026
//
// Working with images
// translation between 2D and 1D indices
// Part 2: Using Video


let myImage;
let myVideo;

function preload(){
  //called BEFORE setup. Won't conclude untill all loads are complete
  myImage = loadImage("assets/hand.jpg");

}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage, 0, 0);
  // image(myVideo,0,0);
  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array

  Mirror();
  updatePixels();

}

function Mirror(){
  for(let y = 0; y <= height; y++){
    for(let x = width/2; x <= width; x++){
      let indexRight = (x + y * width) * 4
      let mirrorX = width - x - 1;
      let indexLeft = (mirrorX + y * width) * 4;

      pixels[indexLeft]     = pixels[indexRight];     // R
      pixels[indexLeft + 1] = pixels[indexRight + 1]; // G
      pixels[indexLeft + 2] = pixels[indexRight + 2]; // B

      
    }
  }
}



function setpixel(x,y,r,g,b){
  //x,y -> pixel location
  //r,g,b -> color values
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}

function setPixelOneD(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

