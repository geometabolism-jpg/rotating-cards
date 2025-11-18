let myFont;
function preload() {
  myFont = loadFont('assets/Inter-Medium.ttf');
}


function setup() {
  createCanvas(1200, 600, WEBGL);
  textFont(myFont);        // Use the loaded Inter font
  textAlign(CENTER, CENTER);
  textSize(8);
}

function draw() {
  background(0);

  let rectWidth = 100;
  let rectHeight = 200;
  let rectDepth = 0.05;   // very thin
  let depthSpacing = 5;  
  let numRects = 90;

  rotateY(frameCount * 0.01);

  stroke(255);
  strokeWeight(0.5); // thin edge lines
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
      rotateY(PI); // rotate 180° to face the camera
      translate(0, 0, rectDepth / 2 + 0.01);
      text("ACTOR", 0, 0);
      pop();
    }

    pop();
  }
}
