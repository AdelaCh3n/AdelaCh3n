// Map Manipulation
// Adela
// 4/22/2026
//
// Working with images
// translation between 2D and 1D indices


let myImage;


function preload() {
  //called BEFORE setup. Won't conclude untill all loads are complete
  myImage = loadImage("assets/nuit.jpg")
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);

}

function draw() {

  image(myImage, 0, 0);

  // access and modify the pixels on the canvas
  loadPixels();  //dumps data from canvas into array
  xBlur(5);
  updatePixels();
}

function xBlur(radius) {
  let copy = structuredClone(pixels);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      let avg = getAvg(x, y, radius, copy);
      let index = ((y * width) + x) * 4;

      pixels[index] = avg[0];
      pixels[index + 1] = avg[1];
      pixels[index + 2] = avg[2];
    }
  }
}



function getAvg(x, y, radius, src) {
  //return average intensity(R,G,B indivisually)
  //for itself and its diagonal neighbours 
  //of a particular distance (radius).
  let r = 0, g = 0, b = 0;
  let count = 0;
  for (let d = -radius; d <= radius; d++) {
    let coords = [
      [x + d, y + d],
      [x + d, y - d]
    ];
    for (let i = 0; i < coords.length; i++) {
      let nx = coords[i][0];
      let ny = coords[i][1];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        let index = ((ny * width) + nx) * 4;
        r += src[index];
        g += src[index + 1];
        b += src[index + 2];
        count++;

      }
    }
  }
  return [r / count, g / count, b / count];
}


function setpixel(x, y, r, g, b) {
  //x,y -> pixel location
  //r,g,b -> color values
  let index = ((y * width) + x) * 4;
  setPixelOneD(index, r, g, b);
}

function setPixelOneD(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

