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
  myImage = loadImage("assets/nuit.jpg")
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);

}

function draw() {
  
  // image(myImage, 0, 0);
  image(myImage,0,0);
  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array
  // boost();
  // greyscale();
  fiveColor();
  updatePixels();

}

function fiveColor(){

  for( let x = 0; x < width; x++ ){
    for(let y = 0; y< height; y++ ){
      let index = ((y*width) + x)*4;
      let avg = getAvg(x,y); // 0-255
      if (avg >= 205) {
        pixels[index] = 170;
        pixels[index +1] = 230;
        pixels[index +2] = 220;
        
      }
      else if(avg >= 155){
        pixels[index] = 105;
        pixels[index +1] = 150;
        pixels[index +2] = 210;
      }
      else if(avg >= 105){
        pixels[index] = 120;
        pixels[index +1] = 180;
        pixels[index +2] = 60;
      }
      else if(avg > 54) {
        pixels[index] = 130;
        pixels[index +1] =30;
        pixels[index +2] =130;
      }
      else {
        pixels[index] = 90;
        pixels[index +1] =10;
        pixels[index +2] =50;
      }
    }
  }
}



function getAvg(x,y){
  //return average intensiy of rgb
  // at (x,y)
  let index = ((y*width) + x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return (r+g+b) / 3
  
}


