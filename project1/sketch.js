function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#BEE9E5');
  noStroke();
  
  //wallet main body shadow
   push()
  //fill('#302F2F')
fill('#75757589')
 
  rect(32,80,304,242,15);
   filter(BLUR,5);
  pop()
  
  //wallet main body as a rounded rectangle
  push()
  fill('black')
  rect(25,73,304,242,15);
  pop()
  
  //wallet top flap
  push()
    noFill();
   stroke('#D1CDCDB7');
  strokeWeight(2);
    fill('#4B4A4A')
  //rect(25,73,304,27,15);
   rect(25,73,304,27,15,15,0,0);
  
  //rect(25,87,304,27);
  
  triangle(26,114,177,231,329,114);
  pop()
  
  
  
  
  //adding brand text
  push()
   textSize(32);
  fill(255);
  //stroke(0);
  //strokeWeight(4);
  text('Balenciaga', 100, 150);
  pop()
  
  //apply green graffiti
  push()
  noFill();
   stroke('#CEFF08');
  strokeWeight(4);
  
  //drawing traingles
  triangle(90.5,180,60,270,113,286);
  triangle(40,189,44,265,130,265);
  pop()
  
  //apply pink graffiti
  push()
    noFill();
   stroke('#FF08C9');
  strokeWeight(4);
  
    triangle(273,170,230,227,316,227);
  triangle(304,142,300,232,260,248);
  
  pop()
}