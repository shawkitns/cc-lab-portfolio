let shutter_height;
let mouth_arc;
let bg_color_r,bg_color_g,bg_color_b;

let limitInSecs = 15, //the number of seconds to count down from
    lastTime,  // store the time in milliseconds when the timer is reset
    timeInSecs, // track how many seconds are left on the timer
    limitInMillis; //variable to convert from seconds to millis

let display_text; //displays time or error message



function setup() {
  createCanvas(400, 400);
  resetTimer();
 
}

function draw() {
  
  //calculating how many seconds are left on the timer
  timeInSecs = lastTime + limitInMillis - millis();  //how many milliseconds are left between now and the end of the timer?
  timeInSecs = timeInSecs/1000 //divide by 1000 to convert value to seconds 
  
    timeInSecs = nf(timeInSecs, 2, 2);
   display_text = timeInSecs + ' seconds';
   
  

  background(bg_color_r,bg_color_g,bg_color_b);
    
 
  
  //head
  noStroke()
  fill("#7B3603")
  circle(200,170,250)
  
  //ears
    fill("#7B3603")
  circle(80,170,50)
    circle(320,170,50)
  
  
  
  //face
  fill("#EAA451")
   ellipse(200, 150, 200, 150);
   ellipse(200, 240, 150, 80);
  
 
  
  //eyes
   fill(bg_color_r,bg_color_g,bg_color_b)
  circle(155,155,65)
  circle(245,155,65)
  
  //pupils
  fill("black")
 circle(155,155,25)
   circle(245,155,25)
  
  
 
  //min height 15 eyes seen
   //rectangle to hide max height 75
    fill("#EAA451")
  rect(120,105,160,shutter_height)
  
  //nose
  fill("#4D4343")
   ellipse(200, 210, 40, 20);
  
  //mouth
  // fill("black")
  // rect(155,240,95,5)
  
  //expression
   push()
    stroke("black");
  strokeWeight(6);
  noFill();
  //90 is arc max, 10 is arc min
  //1 is min, 45 is max
  arc(200,250, 100, mouth_arc, PI, 2*PI)

  pop()
  
  
  //labels
  
  push()
  textSize(15);
    textAlign(CENTER);
  fill("black");

  text('Time remaining to shoot your next shot...', 200, 320);
  pop()
  

  
  //cursor
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  

  
      shutter_height = map(timeInSecs,limitInSecs,0,15,75)
  bg_color_g = map(timeInSecs,limitInSecs,0,255,0)
   bg_color_b = map(timeInSecs,limitInSecs,0,255,0)
  mouth_arc = map(timeInSecs,limitInSecs,0,1,45)
  
  
  
   if (millis() > lastTime + limitInMillis){ //if the current time is later than the start time plus the limit
    //resetTimer(); automatically starts again
     
//      console.log("Condition met!")
    
  stopDrawing();


  }
  
push()
    textSize(30);
    textAlign(CENTER);
  fill("black");

   text(display_text, 200, 360);
  pop()
  

}

function mousePressed()
{
  
 resetTimer();
 
  
}

//reset timer
function resetTimer() 
{
  console.log("Shot taken! Reset called!");
  bg_color_r = bg_color_g = bg_color_b = 255;
    display_text = limitInSecs + ' seconds';
  shutter_height = 15;
  mouth_arc = 1;
  
   lastTime = millis(); //at what time was the timer last reset?
  limitInMillis = limitInSecs * 1000;
}

//don't continue drawing after time runs out and display message!
function stopDrawing()
{
 
  console.log("You have entered this bracket!")
        shutter_height = 75;
  mouth_arc = 45;
        display_text = "You missed your shot!"
 
}