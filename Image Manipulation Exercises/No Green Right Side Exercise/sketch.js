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
  myImage = loadImage("assets/race.jpg");

}

function setup() {
  createCanvas(myImage.width, myImage.height);
  // createCanvas(640, 480);
  // myVideo = createCapture(VIDEO)
  pixelDensity(1);
  // myVideo.hide();
}

function draw() {
  background(220);
  image(myImage, 0, 0);
  // image(myVideo,0,0);
  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array

  NoGreenRt();
  updatePixels();

}

function NoGreenRt(){
  for(let y = 0; y <= height; y++){
    for(let x = 0; x <= width; x++){
      
      // let r = pixels[index];
      // let g = pixels[index + 1];
      // let b = pixels[index + 2];

      if ( x >= width/2){
        let index = (x + y * width) * 4
        pixels[index+1] = 0;
      }
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

