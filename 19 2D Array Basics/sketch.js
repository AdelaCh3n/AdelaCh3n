// 2D array
// Adela
// 4/15
//
// 0 (black)   255 (white)
// grid is 6 x 5

let grid = [
  [ 0 ,   0 ,   0 ,  255,   0 ,  255 , 255,  0 ,   0,   255],
  [255,   0 ,  255,   0 ,  255,   0  ,  0,  255,   0,   255],
  [ 0 ,   0 ,   0 ,   0 ,   0 ,  255 , 255,  0 ,  255,  255],
  [255,  255,  255,  255,  255,   0  ,  0,  255,   0,    0 ],
  [255,   0 ,  255,  255,  255,  255 , 255, 255,  255,   0 ],
  [255,  255,   0 ,   0 ,  255,  255 ,  0,  255,   0,   255],
  [255,  255,  255,  255,   0 ,   0  , 255,  0 ,  255,  255],
  [255,   0 ,  255,  255,  255,  255 ,  0,  255,   0,    0 ],
  [ 0 ,  255,  255,   0 ,   0 ,   0  ,  0,   0 ,  255,  255],
  [ 0 ,  255,   0 ,  255,   0 ,  255 ,  0,   0 ,  255,  255] 
];

let rows = grid.length;
let cols = grid[0].length;
let tilesize = 60;
let flipMode = "CROSS";
let mouseClicked = 0;
let timerS = 0;
let timerM = 0;
let win = 0; //0 - not winning yet, 1 = win

function setup() {
  createCanvas(cols*tilesize +200, rows* tilesize);
  randomGrid()
  win = 0;
}

function draw() {
  background(220);
  renderGrid();
  textSize(20);
  fill("red");
  if (mouseX < cols*tilesize && mouseY < rows* tilesize)text(getCurrentX() + "," + getCurrentY(), mouseX, mouseY);
  checkWin();
  overlay();
  push()
  fill(0);
  text("mouse clicked: "+mouseClicked,610,20);
  pop();
  timer();

  
  
}

function flip(x, y){
  if (grid[y][x] === 0)grid[y][x] = 255;
  else grid[y][x] = 0;
}

function keyPressed(){
  if(keyCode === 32){
    if (flipMode === "CROSS") flipMode = "SQUARE";
    else flipMode = "CROSS";
  }
}

function timer(){
  //a timer
  push()
  fill(0);
  if(mouseClicked > 0  && frameCount %60 === 0 && win !== 1) {
    //record time after first click and stop when win 
    timerS++;
    if (timerS % 60 === 0) {
      timerS = 0;
      timerM ++;
    }
  }
  text("timer: "+ timerM + " min "+timerS+" s", 610, 40);
  pop();
}


function mousePressed(){
  
  
  //only do the flip if mouse is on the canvas
  if (mouseX < cols*tilesize && mouseY < rows* tilesize){
    mouseClicked++;
    let x = getCurrentX();
    let y = getCurrentY();


    if(keyIsPressed && keyCode === SHIFT){
      //CHEATERS
      flip(getCurrentX(), getCurrentY());
    }else{
      flip(getCurrentX(), getCurrentY());
      //flip the neighbours
      if(flipMode === "CROSS"){
        //cross mode
        if(x-1 >= 0) flip(x-1, y);
        if(y-1 >= 0) flip(x, y-1);
        if(x+1 <= width) flip(x+1, y);
        if(y+1 <= height) flip(x, y+1);
      }
      else{
        //square mode
        if(x-1 >= 0) flip(x-1, y);
        if(y-1 >= 0) flip(x, y-1);
        if(x-1 >= 0 && y-1 >= 0) flip(x-1, y-1);
      }
    }
  }
}

function renderGrid(){
  //interpret the data stored in 2D Array (grid)
  //draw a matrix of squares to reflect it
  for( let y = 0; y < rows; y++){ // y: 0, 1, 2, 3, 4
    for( let x = 0; x < cols; x++){ // x: 0, 1, 2, 3, 4, 5
      print(x + ", " + y);
      let fillColor = grid[y][x];
      fill(fillColor)
      square(x*tilesize, y*tilesize, tilesize);
    }
  }
}

function getCurrentX(){
  //determine the current col position of mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor (constrainedX / tilesize);
}

function getCurrentY(){
  //determine the current col position of mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor (constrainedY / tilesize);
}

function checkWin(){
  
  //check if every grid is the same color
  for( let y = 0; y < rows; y++){ 
    for( let x = 0; x < cols; x++){ 
      if (grid[y][x] !== grid[0][0]) {
        win = 0;
        return; 
      }
    }
  }
  push();
  textSize(30);
  textAlign ( CENTER , CENTER );
  text("YOU WIN!!!", cols * tilesize/2, rows * tilesize/2);
  pop();
  win = 1;
}

function randomGrid(){
  //randomnize the grid
  let randomColor = [0, 255];
  for( let y = 0; y < rows; y++){ 
    for( let x = 0; x < cols; x++){
      grid[y][x] = random(randomColor);
    }
  }
}

function overlay(){
  // indicate which sqares will be impacted on a click
  if (mouseX < cols*tilesize && mouseY < rows* tilesize){
    fill(0,255,0,40);// only show the color when mouse is in the canvas
    
    let x = getCurrentX();
    let y = getCurrentY();
    
    if(keyIsPressed && keyCode === SHIFT){// CHEATER
      square(x * tilesize, y * tilesize, tilesize);
    }else{
      square(x * tilesize, y * tilesize, tilesize);
      if(flipMode === "CROSS"){//cross mode
        if(x-1 >= 0) square((x-1)* tilesize, y* tilesize, tilesize);
        if(y-1 >= 0) square(x * tilesize, (y-1)* tilesize, tilesize);
        if(x <9) square((x+1)* tilesize, y* tilesize, tilesize);
        if(y < rows* tilesize) square(x * tilesize, (y+1)* tilesize, tilesize);
      }
      else{ //SQUARE
        if(x-1 >= 0) square((x-1)* tilesize, y* tilesize, tilesize);
        if(y-1 >= 0) square(x * tilesize, (y-1)* tilesize, tilesize);
        if(x-1 >= 0 && y-1 >= 0) square((x-1) * tilesize, (y-1)* tilesize, tilesize);
      } 
    }
  }
}

