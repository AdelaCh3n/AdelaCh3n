// Random VS Noise
// Adela
// 2/27/2026
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Looking at unpredictability
// Specifically the difference between
// Uniformly distributed numbers
// and Perlin Noise

//Global Variables
let x1, x2, y1, y2;
let d1, d2;
let minSize = 5; let maxSize = 200

// Variables for using noise()
let noiseTime = 12, noiseSpeed = 0.02;
// noisespeed controls how connected noise are


let ySpeed = 0;
let yNoiseTime = 10, yNoiseSpeed = 0.1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height * 0.5
  x2 = width * 0.7; y2 = height * 0.5
  frameRate(24);
}

function draw() {
  // randomSeed(703); // actual value
  background(0);
  ySpeed = noise(yNoiseTime);
  ySpeed = map(ySpeed, 0, 1, -5, 5);
  y2 += ySpeed;
  yNoiseTime += yNoiseSpeed;
  
  randomCircle();
  noiseCircle();

}

function stars() {
  //use random to generate 100 stars
  //alt + shift + F = auto format
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(2, 4);
    circle(x, y, size);
  }


}

function randomCircle() {
  fill(120, 180, 60);
  d1 = random(minSize, maxSize)
  circle(x1, y1, d1);
}

function noiseCircle() {
  // draw a fixed circle with 
  // random()ly changing(but smooth) diameter
  fill(200, 150, 50);
  d2 = noise(noiseTime); //yeilds value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;
}
