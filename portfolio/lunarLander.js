width = windowWidth;
height = windowHeight;
var r = 3;
var y = 0;
let gravity = 0.07;
var fuel = 100;
let directionX = 4;
let x = 0;
let brokeX = 3;
let brokeY = -3;
let speedY = 0;

function luni(x, y, scale) {
  fill(255, 230, 255);
  noStroke();
  ellipse(155 * scale + x, 140 * scale + y, 50 * scale, 90 * scale);
  ellipse(180 * scale + x, 150 * scale + y, 10 * scale, 40 * scale);
  ellipse(130 * scale + x, 150 * scale + y, 10 * scale, 40 * scale);
  rect(135 * scale + x, 163 * scale + y, 40 * scale, 20 * scale);
  rect(135 * scale + x, 178 * scale + y, 10 * scale, 10 * scale);
  rect(150 * scale + x, 176 * scale + y, 10 * scale, 10 * scale);
  rect(165 * scale + x, 178 * scale + y, 10 * scale, 10 * scale);
  stroke(255, 230, 255);
  strokeWeight(2 * scale);
  line(155 * scale + x, 100 * scale + y, 155 * scale + x, 70 * scale + y);
  ellipse(155 * scale + x, 70 * scale + y, 5 * scale, 5 * scale);
  stroke(0, 0, 0);
  strokeWeight(1 * scale);
  rect(144 * scale + x, 152 * scale + y, 10 * scale, 20 * scale);
  rect(155 * scale + x, 152 * scale + y, 10 * scale, 20 * scale);
  line(145 * scale + x, 118 * scale + y, 164 * scale + x, 118 * scale + y);
  line(155 * scale + x, 109 * scale + y, 155 * scale + x, 128 * scale + y);
  fill(0, 0, 35, 25);
  ellipse(155 * scale + x, 118 * scale + y, 20 * scale, 20 * scale);
}

function button() {
  fill(255, 255, 255);
  rect(400, 100, 100, 50);
  fill(0, 0, 0);
  textSize(20);
  text("START", 420, 117, 100, 100);
}

function draw() {
  background(0, 0, 35, 80);
  fill(255, 50, 80);
  rect(0, height - 80, 600, 600);
  button();

  //blinking stars: https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ
  fill(255, 255, 255);
  var galaxy = {
    locationX: random(width),
    locationY: random(height - 80),
    size: random(1, 6)
  };
  ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);

  //lunar lander gravity
  y = y + r;
  r = r + gravity;

  luni(x, y - 200, 0.7);
  if (y <= 0) {
    r = 3;
  }

  //key is down
  if (keyIsDown(UP_ARROW)) {
    r -= 0.3;
    fuel -= 1;
    speedY = speedY - 0.5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - directionX;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + directionX;
  }

  // check if capsule hits ground
  if (y >= windowHeight - 10) {
    r = -0;
  }

  //fuel
  fill(255, 50, 80);
  textSize(24);
  text("fuel: " + fuel, 480, 350);

  gameOver();
}

function mousePressed() {
  if (mouseX >= 400 && mouseX <= 500 && mouseY >= 100 && mouseY <= 150) {
    y = 0;
    fuel = 100;
    x = 0;
  }
}

speedY = speedY + gravity;

function gameOver() {
  if (fuel <= 0) {
    fill(255, 255, 255);
    textSize(40);
    text("GAME OVER", 100, 250);
    fuel = 0;
    gravity = gravity + 0.1;
  } else if (y > 460 && speedY < 1) {
    fill(255, 255, 255);
    textSize(40);
    text("GAME OVER", 100, 250);
  } else if (y > 460) {
    fill(255, 255, 255);
    textSize(40);
    text("GOOD JOB!", 100, 250);
  }
}
//ich wusste nicht wie ich entweder Game Over hinschreiben soll, wenn es zu schnell herunter fällt oder Good Job, wenn es genau richtig herunter fällt/ ich werde nochmal die Tutoren fragen& neu hochladen.
