
//level1, obstacle prob 0.1
//level2, obsatcle prob 0.15
//level3, obstacle prob 0.2
let grid = [];
let rows = 8;  // Number of rows in the grid
let cols = 8;  // Number of columns in the grid
let cellSize = 336/rows;  // Size of each cell
let player;
let homeworks = 0;
let collectedHomeworks = 0;
let timer = 60; // Game time limit in seconds
let gameOver = false;
let obstacleProb = 0.1;

let regularFont,boldFont;
//text easthetics
let flashInterval = 50; // Number of frames to wait between flashes
let showText = true;    // Whether to show the text

let current_screen = 0;

let player_image;
let homework_image;

let collect_sound;
let bg_music;
let select_sound;

function preload()
{
    boldFont = loadFont('PixeloidSansBold-PKnYd.ttf');
  regularFont = loadFont('PixeloidMono-d94EV.ttf');
  
   player_image = loadImage('shawki_sprite2.png');
  homework_image = loadImage('homework2.png');
  
  collect_sound = loadSound('coinsound.mp3');
  bg_music = loadSound('backgroundmusic.m4a');
  select_sound = loadSound('selectsound.mp3');
  


}

function setup() {
  //createCanvas(cols * cellSize, rows * cellSize);
  createCanvas(404,545)
  bg_music.play()
 resetGame(); // Initialize game state

  // Set interval for the timer countdown
  setInterval(updateTimer, 1000);

}

function draw() {
  
 background("#C8C3BD");
  
  if (gameOver) {
    displayGameOver();
    return;
  }

 

//   // Draw the grid
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       grid[i][j].display();
//     }
//   }

//   // Display the player
//   player.display();

//   // Display the timer
//   textSize(20);
//   fill(255);
//   textAlign(RIGHT, TOP);
//   text(`Time: ${timer}s`, width - 40, 10);
//   textAlign(LEFT, TOP);
//   text(`Homeworks: ${collectedHomeworks}/${homeworks}`, 40, 10);

//   // Check for game over (out of time or collected all homeworks)
//   if (timer <= 0 || collectedHomeworks === homeworks) {
//     gameOver = true;
//   }
  
    switch(current_screen)
    {
      case 0:
         draw_welcomeScreen();
        break;
        
        case 1:
        draw_rulesScreen();
        break;
        
        case 2:
        draw_levelScreen();
        break;
        default:
        //drawlevel2
    }

  
    //show_coordinates();
  

    draw_button(292,472,42,'#B62974')
   draw_button(340,425,42,'#B62974')
  draw_dpad()

    //draw_welcomeScreen();
  //draw_rulesScreen();

  
}

function keyPressed() {
  if (gameOver) {
    if (key == '0') {
      resetGame();  // Reset the game when '0' is pressed after game over
      current_screen = 0;  // Go back to the welcome screen
      select_sound.play();
    }
    return;
  }

  if (keyCode === LEFT_ARROW) {
    player.move(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(1, 0);
  } else if (keyCode === UP_ARROW) {
    player.move(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    player.move(0, 1);
  } else if (key == '0') {
    resetGame(); // Reset the game when '0' is pressed during game play
    current_screen = 0;
    select_sound.play();
  } else if (key == '1') {
    current_screen = 1;
    select_sound.play();
  } else if (key == '2') {
    console.log('easy mode selected!')
    obstacleProb = 0.1;
    current_screen = 2;
    select_sound.play();
  }
  else if(key=='3')
    {
          console.log('hard mode selected!')

      obstacleProb = 0.15;
    current_screen = 2;
    select_sound.play();
    }
    else if(key=='4')
    {
          console.log('shawki mode selected!')

      obstacleProb = 0.2;
    current_screen = 2;
    select_sound.play();
    }

}

function updateTimer() {
  if (!gameOver) {
    timer--;
    if (timer <= 0) {
      gameOver = true;
    }
  }
}

function displayGameOver() {
  
  // background(0, 0, 0, 150);
  // fill(255);
    noStroke();
    fill('#9BBC0F');
 rect(34,34,336,336);

  // textSize(48);
  // textAlign(CENTER, CENTER);
  if (collectedHomeworks === homeworks) {
    
    push()
    
      fill('#0F380F')
        textAlign(CENTER);
      textFont(boldFont);
    textSize(20);
    text("You Win!",200, 79);
    pop()
    
  } else {
    //text("Game Over", width / 2, height / 2);
    push()
      fill('#0F380F')
        textAlign(CENTER);
      textFont(boldFont);
    textSize(20);
    text("Game Over!",200, 79);
    pop()
  }
  
  push()
     fill('#0F380F')
    textAlign(CENTER);
  textFont(boldFont);
  textSize(14);
  text("Press the '0' key to restart",200, 230);
  pop()
  
  
  //buttons here
    draw_button(292,472,42,'#B62974')
   draw_button(340,425,42,'#B62974')
  draw_dpad()

  
}

class GridCell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.type = 'empty';  // 'empty', 'treasure', 'obstacle'
  }
  
  setTreasure() {
    this.type = 'treasure';
  }

  setObstacle() {
    this.type = 'obstacle';
  }

  display() {
    
    //    let x = this.col * cellSize;
    // let y = this.row * cellSize;
    
    let x = (this.col * cellSize) +34;
    let y = (this.row * cellSize) +34;
    
    //    let x = 34*cellSize
    // let y = 34*cellSize
    
    // let x = this.col*15;
    // let y = this.row*15;
    

    // Draw the grid cell
    stroke(0);
    noFill();
    //rect(x, y, cellSize, cellSize);
    
     fill('#9BBC0F');
    rect(x, y , cellSize, cellSize);
   

    // Draw the content based on type
    if (this.type === 'treasure') {
      //fill(255, 255, 0);  // Yellow for treasure
      
      // fill('#306230')
      // ellipse(x + cellSize / 2, y + cellSize / 2 , cellSize / 2);
          let imgWidth = 25; // Set the desired width
  let imgHeight = (homework_image.height / homework_image.width) * imgWidth; // Maintain aspect ratio
  image(homework_image, x+6, y+6, imgWidth, imgHeight); 
      
      
    } else if (this.type === 'obstacle') {
     
    
    
      fill('#0F380F')
            rect(x , y , cellSize, cellSize);

      //rect(x + cellSize / 4, y + cellSize / 4, cellSize / 2, cellSize / 2);
    }
  }
}

class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.radius = cellSize / 4;
  }

  display() {
    //changed from 34 to 24
    let x = this.col * cellSize + cellSize / 2 +24;
    let y = this.row * cellSize + cellSize / 2 + 24;
    
    // fill(255, 0, 0);  // Red for player
    // ellipse(x, y, this.radius * 2);
    
     let imgWidth = 20; // Set the desired width
  let imgHeight = (player_image.height / player_image.width) * imgWidth; // Maintain aspect ratio
  image(player_image, x, y, imgWidth, imgHeight); 
    
    
  }

  move(dcol, drow) {
    let newCol = this.col + dcol;
    let newRow = this.row + drow;
    
    // Check if the new position is within bounds
    if (newCol >= 0 && newCol < cols && newRow >= 0 && newRow < rows) {
      let newCell = grid[newRow][newCol];

      // Check if the new cell is an empty cell or a treasure
      if (newCell.type !== 'obstacle') {
        this.col = newCol;
        this.row = newRow;

        // Check if the player collected a treasure
        if (newCell.type === 'treasure') {
          collect_sound.play();
          collectedHomeworks++;
          newCell.type = 'empty';  // Remove the treasure after collecting
        }
      }
    }
  }
}

function show_coordinates()
{
  push()
    fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  pop()
}

function draw_button(x, y, diameter, colorParam,letter) {
  push()
  fill(colorParam); // Set the fill color based on the parameter
  noStroke();       // Remove stroke (outline)
  ellipse(x, y, diameter, diameter); // Draw the circle
  pop()
}

function draw_arrowButton(x,y,w,colorParam)
{
  push()
  noStroke()
  fill(colorParam)
  rect(x,y,w,w,10)
  pop()
}

function draw_dpad()
{
  push()
  fill('#060911')
  rect(70,400,27,78)
   rect(44,425,78,27)
  pop()
}

function draw_welcomeScreen()
{
  if (frameCount % flashInterval < flashInterval / 2) {
    showText = true;  // Show text for the first half of the interval
  } else {
    showText = false; // Hide text for the second half
  }
  
  noStroke();
  push()
   fill('#9BBC0F');
  rect(34,34,336,336);
 
  pop()
  
  
  //draw_mask()
  
    push()
    fill('#0F380F')
  textAlign(CENTER);
    textFont(boldFont);
    textSize(28)
      text("PLAGERIZER PRO!",200,114)
  pop()
  
  push()
  fill('#306230')
     textAlign(CENTER);
  textFont(boldFont);
      text("Welcome to:", 200, 79);
  textSize(28)
      text("PLAGERIZER PRO!",200,110)
  pop()
  
  draw_sprite();
  
  if(showText)
    {
         push()
  fill('#306230')
     textAlign(CENTER);
  textFont(boldFont);
      textSize(18)
      text("Press '1' to Start.", 200, 320);
  pop()
  
    }
  

}

function draw_rulesScreen()
{
     if (frameCount % flashInterval < flashInterval / 2) {
    showText = true;  // Show text for the first half of the interval
  } else {
    showText = false; // Hide text for the second half
  }
  
  
    noStroke();
    fill('#9BBC0F');
 rect(34,34,336,336);

  
  push()
    fill('#0F380F')
     textAlign(CENTER);
  textFont(boldFont);
  textSize(20)
      text("Rules:", 200, 79);
  
  pop()
  
  push()
  fill('#0F380F')
     //textAlign(CENTER);
  textFont(boldFont);
  textSize(10)
      text("Oh no,Shawki! You partied too hard on\nHalloween and didn't finish your homework!\nUse the arrow keys to walk around the D12\nfloor, avoid obstacles, and 'borrow' pieces\nof your peers' CC work before the timer\nruns out!\n\nIf you don't, you'll flunk this sem.", 54, 109);
  pop()
  
  if(showText)
    {
       push()
   fill('#0F380F')
     textAlign(CENTER);
  textFont(boldFont);
      textSize(15)
  text("\nPress '2' for EASY MODE ", 200, 230);
       text("\nPress '3' for HARD MODE.", 200, 260);
       text("\nPress '4' for SHAWKI MODE.", 200, 290);
  pop() 
    }
  


}

function draw_levelScreen()
{
  
  // Draw the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].display();
    }
  }

  // Display the player
  player.display();

  // Display the timer
  push()
  textSize(20);
  fill(255);
  textAlign(RIGHT, TOP);
  text(`Time: ${timer}s`, width - 40, 10);
  textAlign(LEFT, TOP);
  text(`Homeworks: ${collectedHomeworks}/${homeworks}`, 40, 10);
  pop()

  // Check for game over (out of time or collected all homeworks)
  if (timer <= 0 || collectedHomeworks === homeworks) {
    gameOver = true;
  }
}


function draw_sprite()
{
  let imgWidth = 130; // Set the desired width
  let imgHeight = (player_image.height / player_image.width) * imgWidth; // Maintain aspect ratio
  image(player_image, 142, 110, imgWidth, imgHeight); // Draw the image at (x, y) with width and height
}





//as you progress through the levels, the probabiliy of more obstacles increases, making it more challenging to get through.

function resetGame()
{
  
  
  
  grid = [];
  homeworks = 0;
  collectedHomeworks = 0;
  timer = 60;
  gameOver = false;

  // Reinitialize grid and place treasures/obstacles
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let cell = new GridCell(i, j);
      row.push(cell);
    }
    grid.push(row);
  }
  
console.log("This is the value of obstacle prob right now: " + obstacleProb)

  // Randomly place treasures and obstacles
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = grid[i][j];
      let rand = random(1);
      if (rand < obstacleProb) {
        cell.setObstacle();
      } else if (rand < 0.5) {
        cell.setTreasure();
        homeworks++;
      }
    }
  }

  player = new Player(0, 0);  // Reset the player position
}


