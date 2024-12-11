let skin,clothes,mouth,details;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
 
  
}

function draw() {
  background("#E10E5A");
  noStroke();
  
   skin = "#D9D9D9";
  details = "#000000";
  mouth = "#ADABAB";
  clothes= "#3A3939";
  
  if(mouseIsPressed)
    {
      skin="#4457F0";
      mouth ="#1F2870"
      clothes = "#8C19B2"
      
    }
  
  draw_lower(skin,clothes)
  
  draw_upper(skin,details,clothes)
  
  draw_head(skin,details,mouth)
  
  get_coords()

  
  

}

//draws head of corpse
function draw_head(skin,details,mouth)
{
  //mushroom top outside
   push()
  fill(skin);
      rotate(45);
  ellipse(135, -65, 20, 52);
  pop()
  
  push()
  fill(skin);
  triangle(159, 31, 123, 30, 122, 62);
  pop()
  


  
    //antenna
  push()
  fill(details)
   rotate(-45);
  rect(55,140,20,45)
 
 
  pop()
  
  //mushroom top inside
  push()
 fill(details)
      rotate(45);
  ellipse(135, -65, 15, 39);
  pop()
  
    //corpse head
  push()
    fill(skin);
    circle(200, 110, 108);
  pop()
  
  //eyes
    fill(details)
  ellipse(190, 97, 15, 39);
   ellipse(225, 97, 15, 39);
  
//mouth lines
   push()
   fill(details)
  rotate(45);
   rect(245,-56,3,25)
   rect(253,-48,3,25)
  pop()
  
   fill(mouth)
  ellipse(220, 140, 15, 39);
  
  push()
  
    //mouth
  fill(details)
   ellipse(220, 140, 10, 26);
  pop()
  
}

//cursor current coordinates
function get_coords()
{
    //cursor
  push()
  fill("#4457F0");
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  pop()
}

function draw_upper(skin,details,clothes)
{
  fill(clothes)
  rect(197,161,15,23);
  rect(50,180,300,37);
  rect(50,215,28,35)
   rect(322,215,28,35)
  
   triangle(158, 210, 200, 269, 241, 210);
     triangle(200, 220, 139, 305, 260, 305);
  
  //hands
  push()
   fill(skin);
    rect(50,250,28,35);
    rect(322,250,28,35);
  pop()
  
  //fingers
  push()
    fill(details)
   rect(59,264,2,21);
   rect(64,264,2,21);
  rect(69,264,2,21);
  
    rect(329,264,2,21);
  rect(335,264,2,21);
   rect(341,264,2,21);
  pop()
  
  
}

function draw_lower(skin,clothes)
{
  
   push()
  fill(skin);
    triangle(146.95,382.92,173.5,351.4,177.9,382.05);
  triangle(174.32,343.06,189.12,361.47,181.15,383.7)
  pop()
  
  push()
   fill(clothes)
  triangle(218.1,361.47,232.9,343.06,226.08,383.7)
   triangle(233.73,351.4,229.33,382.05,260.28,382.92)
  pop()
  
  push()
 fill(clothes)
 quad(167,305,190,305,172.5,334.5,153,334.5)
  quad(153,334.5,172.5,334.5,190,363,167,363)
  
  pop()
  
  push()
   fill(skin);
  quad(217,305,240,305,254,333.5,234.5,333.5)
  quad(234.5,333.5,254,333.5,240,363,217,363)
  
  quad(169,310,181,310,167.5,334.41,158,334.41)
  quad(158,334.41,167.5,334.41,181,358,170,358)
  pop()
  
  push()
   fill(clothes)
    quad(226,310,237,310,249,333.59,239.5,333.59)
   quad(239.5,333.59,249,333.59,238,358,226,358)
  pop()
  
 
}


