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
  myImage = loadImage("assets/aviator.png")
}

function setup() {
  //createCanvas(myImage.width, myImage.height);
  createCanvas(640, 480);
  myVideo = createCapture(VIDEO)
  pixelDensity(1);
  // myVideo.hide();
}

function draw() {
  
  // image(myImage, 0, 0);
  image(myVideo,0,0);
  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array
  // boost();
  // greyscale();
  // updatePixels();
  background(163, 11, 37);
  textImage();
}

function textImage(){
  fill(255);
  let scaleAmount = 4;
  textSize(scaleAmount);
  for( let x = 0; x < width; x+= scaleAmount){
    for(let y = 0; y< height; y += scaleAmount){
      let avg = getAvg(x,y); // 0-255
      if (avg > 130) {
        push()
        fill(216, 240, 62);
        text("T",x,y);
        pop()
      }
      else if(avg > 100){
        push()
        fill(217, 174, 22);
        text("x",x,y);
        pop()
      }
      else if(avg > 70){
        push()
        fill(199, 139, 8);
        text(":",x,y);
        pop()
      }
      else if(avg > 35) {
        push()
        fill(161, 35, 13);
        text(".",x,y);
        pop()
      }
    }
  }
}


function boost(){
  //brightening filter
  let boostAmount = map(mouseX,0,width, -100, 100);
  for(let i = 0; i<pixels.length;i+=4){
    let r = pixels[i] +boostAmount;
    let g = pixels[i+1] +boostAmount;
    let b = pixels[i+2] +boostAmount;
    setPixelOneD(i,r,g,b);
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

function greyscale(){
  //use the average intensity of each pixel
  //to represent it as a shade of grey
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setpixel(x,y,avg,avg,avg);
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

