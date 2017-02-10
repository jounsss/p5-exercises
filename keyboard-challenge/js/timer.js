function Timer(time){
  this.time = time;
  this.start = millis();
  this.timeLeft = this.time;
  this.hasTimeLeft = true;

  this.render = function(){
    if(this.timeLeft > 0){
      this.timeLeft = round(this.time - (millis() - this.start) / 1000);
    } else {
      this.hasTimeLeft = false;
    }

    noStroke();
    fill(255);
    textSize(50);
    text(this.timeLeft, width/2, height-100, 24, 100);

  }

}
