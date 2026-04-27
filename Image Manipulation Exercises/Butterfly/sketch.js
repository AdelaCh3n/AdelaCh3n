// Butterfly
// Adela
// 4/24/2026
//



let myImage;

function preload(){
  //called BEFORE setup. Won't conclude untill all loads are complete
  myImage = loadImage("assets/butterfly.jpg");
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);

}

function draw() {
  background(220);
  image(myImage, 0, 0);
  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array
  squareShift();
  updatePixels();

}


function squareShift(){
  let butterfly = structuredClone(pixels);
  for( let x = 0; x < width; x++){
    for(let y = 0; y< height; y ++){
      let index = ((y*width) + x)*4;
      let r = butterfly[index];
      let g = butterfly[index +1];
      let b = butterfly[index +2];
      
      if(x <= width/2 && y <= height/2){
        setpixel(x+width/2,y,r,g,b);
      }
      else if(x > width/2 && y <= height/2){
        setpixel(x,y+height/2,r,g,b);
      }
      else if(x > width/2 && y > height/2){
        setpixel(x-width/2,y,r,g,b);
      }
      else if(x <= width/2 && y > height/2){
        setpixel(x,y-height/2,r,g,b);
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

