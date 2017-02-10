function Score(){
  this.pos = createVector(5 ,5);
  this.points = 0;
  this.timesKeyPressed = 0;

  this.render = function(){
    noStroke();
    fill(255);
    textSize(10);
    text("Points: " + this.points, this.pos.x, this.pos.y, 24, 100);
    text("Total keys: " + this.timesKeyPressed, this.pos.x, this.pos.y, 200, 100);

  }

  this.update = function(points){
    this.points += points;
    this.timesKeyPressed++;
  }

}
