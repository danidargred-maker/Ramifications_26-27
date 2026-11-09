let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15);
}

function draw() {
  for (let i = branches.length - 1; i >= 0; i--) {
  let b = branches[i], a = atan2(mouseY-b.y, mouseX-b.x);
  b.angle += (a-b.angle)*0.01 + random(-0.08,0.08);

  let x = b.x + cos(b.angle)*b.speed;
  let y = b.y + sin(b.angle)*b.speed;

  stroke(230,220,195,180);
  strokeWeight(b.weight);
  line(b.x,b.y,x,y);

  b.x=x; b.y=y; b.length++;

  if (b.length > b.max) {
  if (random() > 0.4)
  for (let j=0; j<2; j++)
  branches.push({
  x:b.x, y:b.y,
  angle:b.angle+random(-0.8,0.8),
  speed:random(1,2),
  weight:b.weight*0.7,
  length:0, max:random(35,65)
  });
  branches.splice(i,1);
  }
  }

  noStroke();
  fill(230,220,195,130);
  textSize(12);
  text("CLICK — CRESCER     |     C — LIMPAR",20,height-20);
}

function mousePressed() {
  branches.push({
  x:mouseX, y:mouseY,
  angle:random(TWO_PI),
  speed:1.5, weight:2,
  length:0, max:random(40,70)
  });
}

function keyPressed() {
  if (key==='c' || key==='C') {
  background(15);
  branches=[];
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(15);
}