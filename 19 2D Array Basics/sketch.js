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


function setup() {
  createCanvas(cols*tilesize, rows* tilesize);
  randomGrid()
}

function draw() {
  background(220);
  renderGrid();
  textSize(20);
  fill("red");
  text(getCurrentX() + "," + getCurrentY(), mouseX, mouseY);
  checkWin();
  overlay();
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


function mousePressed(){

  //only do the flip if mouse is on the canvas
  if (mouseX < width && mouseY < height){

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
  let clearCount = 0;
  for( let y = 0; y < rows; y++){ 
    for( let x = 0; x < cols; x++){ 
      if (grid[y][x] !== grid[0][0]) return; 
    }
  }
  textSize(30);
  textAlign ( CENTER , CENTER );
  text("YOU WIN!!!", width/2, height/2);
  
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
  if (mouseX < width && mouseY < height){
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
        if(x+1 <= width) square((x+1)* tilesize, y* tilesize, tilesize);
        if(y+1 <= height) square(x * tilesize, (y+1)* tilesize, tilesize);
      }
      else{ //SQUARE
        if(x-1 >= 0) square((x-1)* tilesize, y* tilesize, tilesize);
        if(y-1 >= 0) square(x * tilesize, (y-1)* tilesize, tilesize);
        if(x-1 >= 0 && y-1 >= 0) square((x-1) * tilesize, (y-1)* tilesize, tilesize);
      } 
    }
  }
}