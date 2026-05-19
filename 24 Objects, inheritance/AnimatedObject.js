//parent Class if all clas in one file

class AnimatedObject{
    //constructor
    constructor(x,y){
      this.x = x; this.y = y;
      this.size = 6;
    }
    //class method
    move(){
      this.x += random(-2,2);
      this.y += random(-2,2);
    }
  
    display(){
      strokeWeight(this.size);
      point(this.x, this.y);
    }
  
  }