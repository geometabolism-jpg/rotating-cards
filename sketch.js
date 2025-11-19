let myFont;
let canvas;

function preload() {
  myFont = loadFont('Inter-Medium.ttf'); // load font from assets
}

function setup() {
  // Make canvas responsive to both width and height
  resizeResponsiveCanvas();
  canvas.parent(document.body);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(8);
}

function draw() {
  background(0);

  let rectWidth = 100;
  let rectHeight = 200;
  let rectDepth = 0.05; // very thin
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

// Function to make canvas responsive to viewport
function resizeResponsiveCanvas() {
  const maxWidth = windowWidth * 0.95;
  const maxHeight = windowHeight * 0.8; // leave 20% for browser UI
  const ratio = 1200 / 600; // original aspect ratio

  let canvasWidth = maxWidth;
  let canvasHeight = canvasWidth / ratio;

  if (canvasHeight > maxHeight) {
    canvasHeight = maxHeight;
    canvasWidth = canvasHeight * ratio;
  }

  if (!canvas) {
    canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  } else {
    resizeCanvas(canvasWidth, canvasHeight);
  }
}

// Update canvas on window resize
function windowResized() {
  resizeResponsiveCanvas();
}
