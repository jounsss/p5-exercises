var canvas;
var rSlider;
var nSlider;
var dSlider;



function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  rSlider = createSlider(100, 255, 200);
  nSlider = createSlider(1, 10, 5);
  dSlider = createSlider(1, 10, 5);

  var saveButton = createButton("Save img");
  saveButton.position(10, 10);
  //saveButton.mousePressed = saveImage();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  strokeWeight(2);
  beginShape();

  var r = rSlider.value();
  var n = nSlider.value();
  var d = dSlider.value();
  var k = n/d;

  for(var angle = 0 ; angle < d*TAU ; angle += 0.02){

    var x = r *cos(k * angle) * cos(angle);
    var y = r * cos(k * angle) * sin(angle);
    vertex(x, y);
  }
  endShape();
}

function saveImage(){
  //saveCanvas(canvas, "test", 'jpg');
  alert("saVe");
}
