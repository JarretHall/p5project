var phil = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(phil, 100, 700);
  fill("#add8e6"); //Background Color
  stroke("#5EFF33"); //Stroke color
  strokeWeight(5);
  ellipse(mouseX, mouseY, 20, 20);
  fill("#8333FF");
  ellipse(phil, 200, phil, phil);

  textSize(15);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(LEFT);
  text("Wand Shooting Effect", 40, 40);
}

function mousePressed() {
  if (phil > 400) {
    phil = 20;
  } else {
    phil = phil + 15;
  }

}
