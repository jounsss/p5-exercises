var targetPosition;
var target;
function setup() {
  createCanvas(640, 380);
  targetPosition = createVector(150, 50);
  target = new Target(targetPosition.x, targetPosition.y);
}

function draw() {
  background(0);
  target.render();
}

function keyPressed() {
  if (keyCode === 65) {
    target.setNewPosition()
  }
}
