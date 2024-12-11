
let speed;
let r_color,g_color,b_color;
let s;
let rect_w,rect_l;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#000000");
  noStroke();
  //fill("#FFC107");
  fill("rgb(250,153,7)")
  
  s = second();
  
  
  speed = map(mouseX,0,width,0.015,0.055)
  //rect_width = map(mouseY,0,height,0,60);
  
  rect_w = map(mouseY,0,height,25,35);
    rect_l = map(mouseY,0,height,65,35);
  
  
  
    for (let col=0; col <= width; col += 30) {
      for (let row=0; row <= height; row += 70) {  
        push();
     
        /* move the origin from (0,0) to the point of rotation (col,row)*/
        translate(row, col);
        
      // if(row%4==0 && col%4==0)
      //   {
      //       fill("rgb(255,7,80)")
      //   }
        if(row%7==0 && col%4==0)
        {
            //fill("rgb(255,7,80)")
          fill(r_color,g_color,b_color);
        }
          
      
        //rotate(frameCount * 0.030);
          rotate(frameCount * speed);
        rectMode(CENTER);
       
        //rect(0,0,25,65);
       //rect(0,0,45,45);
        rect(0,0,rect_w,rect_l);
        
        pop();     
        
        
      }
    }  
  
  
  // r_color =map(mouseX,0,600,255,0);
  // b_color = map(mouseX,0,600,7,163);
  // g_color = map(mouseX,0,600,80,255);
  
    r_color =map(s,0,60,255,0);
  b_color = map(s,0,frameCount,7,163);
  g_color = map(s,0,60,80,255);
  
  
  
}