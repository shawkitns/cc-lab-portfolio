
let r,g,b;

let lefteye_position,righteye_position;

let eyebrow_thickness,smile_thickness;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  hair_outline_color = nose_color = smile_color = '#FF0000';
  hair_fill_color = '#FD5656';
  
  //initalizing to red
  r =255;
  g =0;
  b = 0;
  
  //hair color r-2,g+86,b+86
  
  //initalizing eye postions
  lefteye_position = righteye_position = 192;
  
  eyebrow_thickness = 6;
  smile_thickness = 15;
  
  
}

function draw() {
  background("#E517A7");
  
  //hair
  push()
   stroke(r,g,b);
  strokeWeight(3);
  fill(r-2,g+86,b+86);
  //left hair set
  ellipse(103,142,mouseX/2,49)
  ellipse(103,172,mouseX/4,mouseY/2)
  ellipse(133,112,mouseX/7,mouseY/3)
  
  //right hair set
   ellipse(293,142,mouseX/2,49)
  ellipse(293,172,mouseX/4,mouseY/2)
  ellipse(273,112,mouseX/7,mouseY/3)
  
  pop()
  
  //skin
 fill('#FFF8B8')
  circle(200,200,200);
  //rect(154,284,94,77);
  
  //nose
   fill(r,g,b);
  circle(200,224,(mouseX+mouseY)/10);
  
 
  
  //      push()
  // stroke('black');
  // strokeWeight(4);
  //  pop()
  
  //pupils
  
  //eyes here
  
    push()
  stroke('#0091FF');
  strokeWeight(5);
  fill('white')
    ellipse(165,180,33,63)
    ellipse(235,180,33,63)
  
  pop()
  
  //dead center eye
  //ellipse(165,180,14,32)
  
  push()
   stroke('#0091FF');
  strokeWeight(3);
  fill('black')
  ellipse(165,lefteye_position,14,32)
    ellipse(235,righteye_position,14,32)
  pop()



  //smile
  push()
    stroke(r,g,b);
  strokeWeight(smile_thickness);
  noFill();
  arc(200,230, mouseY/2, 100, 0.25, PI - 0.25)

  pop()
  
  push()
   stroke('#000000');
  strokeWeight(eyebrow_thickness);
  noFill();
   arc(165,142, 33, 43, PI - 0.25, 0.25)
  arc(235,142, 33, 43, PI - 0.25, 0.25)
  pop()
  
  


  
  //show points
  push()
  fill('black');
  text("("+mouseX+","+mouseY+")",mouseX,mouseY);
  pop()
}

function mousePressed()
{
  
  console.log("This worked!");


  r=random(255);
  g=random(255);
  b=random(255);
  
  //so that both eyes get different random values
  lefteye_position = random(162,192);
  righteye_position = random(162,192);
  
  eyebrow_thickness = random(2,10);
  smile_thickness = random(5,20);
  
}
