function Target(x, y){
  this.pos = createVector(x, y); // target postition
  this.d = 50; // target diameter
  this.color = 255;
  this.keyCode = round(map(random(), 0, 1, 65, 90));
  this.fontSize = this.d - 10;

  this.render = function(){
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.d);

    noStroke();
    fill(255);
    textSize(this.fontSize);
    textAlign(CENTER);
    text(String.fromCharCode(this.keyCode), this.pos.x, this.pos.y + this.fontSize/2.5);
  }

  this.setNewPosition = function(){
    var newX = map(Math.random(), 0, 1, 10 + this.d, width-10-this.d);
    var newY = map(Math.random(), 0, 1, 10 + this.d, height-10-this.d);
    this.pos = createVector(newX ,newY);
  }

  this.setNewKeyCode = function(){
    this.keyCode = round(map(random(), 0, 1, 65, 90));
    console.log("new keycode: " + this.keyCode + " = " + String.fromCharCode(this.keyCode).toLowerCase());
  }

  this.update = function(){
    this.setNewPosition();
    this.setNewKeyCode();
  }
}
