let myFont;
let canvas;

function preload() {
  myFont = loadFont('Inter-Medium.ttf');
}

function setup() {
  resizeResponsiveCanvas();
  canvas.parent(document.body);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(8);
  ortho(-width/2, width/2, -height/2, height/2, 0, 1000); // switch to orthographic
}

function draw() {
  background(0);

  let scaleFactor = width / 1200; // scale based on width
  let rectWidth = 100 * scaleFactor;
  let rectHeight = 200 * scaleFactor;
  let rectDepth = 0.05 * scaleFactor;
  let depthSpacing = 10 * scaleFactor;
  let numRects = 45;

  rotateY(frameCount * 0.008);

  stroke(255);
  strokeWeight(0.5 * scaleFactor);
  fill(0);

  for (let i = 0; i < numRects; i++) {
    push();
    translate(0, 0, -i * depthSpacing);
    box(rectWidth, rectHeight, rectDepth);

    fill(255);
    noStroke();

    if (i === 0) {
      push();
      translate(0, 0, rectDepth / 2 + 0.01 * scaleFactor);
      text("ACTOR", 0, 0);
      pop();
    }

    if (i === numRects - 1) {
      push();
      rotateY(PI);
      translate(0, 0, rectDepth / 2 + 0.01 * scaleFactor);
      text("ACTOR", 0, 0);
      pop();
    }

    pop();
  }
}

function resizeResponsiveCanvas() {
  const maxWidth = windowWidth * 0.95;
  const maxHeight = windowHeight * 0.8;
  const ratio = 1200 / 600;

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

  ortho(-canvasWidth/2, canvasWidth/2, -canvasHeight/2, canvasHeight/2, 0, 1000);
}

function windowResized() {
  resizeResponsiveCanvas();
}
