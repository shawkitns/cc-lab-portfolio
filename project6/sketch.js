//grey part w600 h500

let day_index = 0;
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

let cols,rows;
let spacing=20;
let size=[]
let scale = 0.1;

let spotify_mins = [9,45,29,20,33,18,31,]




function setup() {
  createCanvas(600, 600);
  cols=width/spacing;
//rows=500/spacing;
  rows=height/spacing;
 
}

function draw() {
  background('#1DB954');
  
//     rect(0, 0, 600, 500);
//     fill('#000000')
  
//    rect(0, 500, 600, 100);
// fill('#79839A')
  
let green_amount= spotify_mins[day_index]/2;

    
  for(let i=0;i<cols;i++)
    {
      size[i]=[]
      for(let j=0;j<rows;j++)
        {
     size[i][j]=15;
          size[i][j]=(dist(mouseX,mouseY,spacing/2+i*spacing,spacing/2+j*spacing))*scale
      
          push()
          rectMode(CENTER)
          fill('black')
            stroke('#1DB954');
          strokeWeight(green_amount)
          rect(spacing/2 + i*spacing,spacing/2+j*spacing,size[i][j],size[i][j])
     
          pop()
             //fill('black')
        }
    }
  
  

  
  //get_coords();
  
  push()
  fill('black')
     rect(0, 500, 600, 100);

  pop()
  
      push()
  textAlign(CENTER, CENTER);
    textSize(35);
  fill('white')
   text(days[day_index],310,555)
 
  
  pop()
  
  
      push()
  textAlign(CENTER, CENTER);

  noFill()
  
    stroke('white')
    strokeWeight(4);
    textSize(120);
  // stroke(20)
  //fill('white')
   text(spotify_mins[day_index] + ' mins',300,250)
 
  
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

function mousePressed()
{
  if(day_index>=days.length-1)
    {
      day_index=0;
    }
  else
    {
      day_index++;
    }
}