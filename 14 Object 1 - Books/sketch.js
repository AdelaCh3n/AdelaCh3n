// Object 1 - Books
// Adela
// 3/24/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//global variables
let myBook;
let Book2;
let Book3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Mr.Scott", 1234213131321, "leatherbound", 500, width * 0.3);
  Book2 = new Book("Meow", "Cat", 7482690470134, "hardcover", 777, width * 0.5);
  Book3 = new Book("OWOWOWOW", "WWOOOOO", 4932790733124, "softcover", 300, width * 0.7);
}

function draw() {
  background(220);
  myBook.display();
  Book2.display();
  Book3.display();
}

class Book {
  //1. constructor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;


  }
  display() {
    rectMode(CENTER); textAlign(CENTER, CENTER); 
    textSize(20);


    switch (this.cover) {
      case "softcover":
        fill("red"); break;

      case "hardcover":
        fill("blue"); break;

      case "leatherbound":
        fill("yellow"); break;

    }

    push();
    translate(this.x, height / 2);
    rect(0, 0, this.pages / 10, 150);
    fill(0);
    text(this.title[0], 0, -50);
    pop();

  }



}

