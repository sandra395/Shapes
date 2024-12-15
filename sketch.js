function setup() {
  createCanvas(650, 650);
}

function draw() {
  background('#FFF2D1');  // Set the background color to a soft yellow

  noStroke(); // Disable stroke (outline)

  // Yellow Circle
  noFill();  // Disable fill
  stroke('#FFCC66');  // Set stroke color to yellow
  strokeWeight(20);  // Set stroke thickness
  circle(450, 175, 220);  // Draw a circle at (450, 175) with a diameter of 220
  
  noStroke();  // Disable stroke again

  // Blue Triangle
  fill('#92DCE5');  // Set fill color to light blue
  triangle(350, 600, 600, 600, 350, 350);  // Draw a triangle with the given coordinates

  // Red Square
  fill('#FF6F5C');  // Set fill color to red
  square(20, 350, 250);  // Draw a square at (20, 350) with a side length of 250

  // Pink Arc
  fill('#FFBEB3');  // Set fill color to light pink
  arc(270, 300, 500, 500, PI, PI + HALF_PI);  // Draw an arc with specified parameters

  // Black Line
  stroke('#2B303A');  // Set stroke color to dark gray/black
  strokeWeight(40);  // Set stroke thickness
  line(500, 400, 600, 400);  // Draw a horizontal line from (500, 400) to (600, 400)
  line(550, 350, 550, 450);  // Draw a vertical line from (550, 350) to (550, 450)
}
