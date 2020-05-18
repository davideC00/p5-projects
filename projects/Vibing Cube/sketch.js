let angle;
let cols;
let rows;
let scal;
let rectHeight;
let rectWidth;
let cube;
let c;

function setup() {
  setAttributes('antialias', true);
  c = createCanvas(800, 400, WEBGL);
  c.parent('cube');
  angle = PI/2;
  cube = new Cube(100, 20);
}

function draw() {
  background(150);
  frameRate(25);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  stroke(255);
  rotateX(angle += 0.01);
  rotateY(angle += 0.01);

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  fill(mouseY, 250, mouseX);

  cube.setNoise(25);
  cube.createFaces();
}
