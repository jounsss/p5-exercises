var target;
var score;
var timer;

var seconds = 20;

function setup() {
  createCanvas(640, 380);
  target = new Target(width/2, height/2);
  score = new Score();
  timer = new Timer(seconds);
}

function draw() {
  if(timer.hasTimeLeft){
    background(0);
  } else {
    background(100);
  }
  target.render();
  score.render();
  timer.render();
}

function keyPressed() {
  if(timer.hasTimeLeft){
    if (keyCode === target.keyCode) {
      target.update()
      score.update(1);
    } else {
      background(255,0,0);
      score.update(0);
    }
  } else {
    if(keyCode === RETURN){
      target = new Target(width/2, height/2);
      score = new Score();
      timer = new Timer(seconds);
    }
  }
}
