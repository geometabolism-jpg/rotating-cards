let myFont;
let canvas;

function preload() {
  myFont = loadFont('Inter-Medium.ttf'); // root folder
}

function setup() {
  // Make canvas responsive to window width
  const canvasWidth = windowWidth * 0.95; // 95% of viewport width
  const canvasHeight = (canvasWidth / 1200) * 500; // maintain 1200x500 ratio
  canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(8);
}

function draw() {
  background(0);

  let rectWidth = 100;
  let rectHeight = 200;
  let rectDepth = 0.05;   // very thin
  let depthSpacing = 10;  
  let numRects = 45;

  rotateY(frameCount * 0.008);

  stroke(255);
  strokeWeight(0.5);
  fill(0);

  for (let i = 0; i < numRects; i++) {
    push();
    translate(0, 0, -i * depthSpacing);
    box(rectWidth, rectHeight, rectDepth);

    fill(255);
    noStroke();

    // Front of the first card
    if (i === 0) {
      push();
      translate(0, 0, rectDepth / 2 + 0.01);
      text("ACTOR", 0, 0);
      pop();
    }

    // Back of the last card
    if (i === numRects - 1) {
      push();
      rotateY(PI);
      translate(0, 0, rectDepth / 2 + 0.01);
      text("ACTOR", 0, 0);
      pop();
    }

    pop();
  }
}

// Update canvas on window resize
function windowResized() {
  const canvasWidth = windowWidth * 0.95;
  const canvasHeight = (canvasWidth / 1200) * 500;
  resizeCanvas(canvasWidth, canvasHeight);
}
