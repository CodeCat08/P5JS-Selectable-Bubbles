/*
This program demonstrates removal of objects from an array
using the .splice() method.
*/
let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY) == true) {
      bubbles[i].setBrightness(255);
    }
    else {
      bubbles[i].setBrightness(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

function mouseDragged() {
  let x = mouseX;
  let y = mouseY;
  let r = random(20, 60);
  let tempBubble = new Bubble(x, y, r);
  tempBubble.r = random(0,255);
  tempBubble.g = random(0,255);
  tempBubble.b = random(0,255);
  bubbles.push(tempBubble);
}
