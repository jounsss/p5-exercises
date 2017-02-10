function Target(x, y){
  this.pos = createVector(x, y); // target postition
  this.d = 30; // target diameter
  this.color = 255;
  this.keyCode = 65;
  this.fontSize = 24;

  this.render = function(){
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.d);

    noStroke();
    fill(255);
    textSize(this.fontSize);
    textAlign(CENTER);
    text(String.fromCharCode(this.keyCode).toLowerCase(), this.pos.x - this.fontSize/2, this.pos.y - this.fontSize/2, this.fontSize, this.fontSize);
  }

  this.setNewPosition = function(){
    var newX = map(Math.random(), 0, 1, 10 + this.d, width-10-this.d);
    var newY = map(Math.random(), 0, 1, 10 + this.d, height-10-this.d);
    this.pos = createVector(newX ,newY);
  }
}
