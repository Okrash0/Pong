function setup() {
  createCanvas(w, h);
  background(0);
}

var w = 700;
var h = 500;

var ph = 110;

var p1 = {
  y: 200,
  bott: 310,
  sco: 0
};

var p2 = {
  y: 200,
  bott: 310,
  sco: 0
};

//var p1y = 200;
//var p1bott;

var bx = w/2;

var by = h/2;

function draw() {
  
  
  background(0);
  
  player();
  ball();
  score();
  scoreTxt();
  
  ellipse(bx, by, 30);
  
  rect(50, p2.y, 18, ph);
  rect(630, p1.y, 18, ph);
}




var dirx = 2;
var diry = 0;
var yspeed;
var dif = 3;

function ball() {
  p1.bott = p1.y + ph;
  p2.bott = p2.y + ph;
  yspeed = random(-4, 4);
  
  if (bx >= 630-15 && bx <= 630-15+18  && p1.y <= by && by <= p1.bott) {
    dirx = random(-(2*dif),-dif);
    diry = yspeed;
    dif *= 1.08;
  }
  
  if (bx <= 50+35 && bx >= 50+30-18 && p2.y <= by && by <= p2.bott) {
    dirx = random(dif, dif*2);
    diry = yspeed;
    dif *= 1.08;
  }
  
  if (by <= 0 ) {
    diry = random(1, 4);
  }
  
  if (by >= h) {
    diry = random(-4, -1);
  }
  
  by += diry;
  bx += dirx;
  
}

function player() {

  if (keyIsDown(83) && p2.y < h-ph) {
    p2.y += 10;
  }
  
  if (keyIsDown(87) && p2.y > 0) {
    p2.y -= 10;
  }
  

  if (keyIsDown(DOWN_ARROW) && p1.y < h-ph) {
    p1.y += 10;
  }
  
  if (keyIsDown(UP_ARROW) && p1.y > 0) {
    p1.y -= 10;
  }
}

function score() {
  
  if (bx >= w) {
    p1.sco += 1;
    bx = w/2;
    by = h/2;
    diry = 0;
    dirx = -3;
    dif = 3;
  }
  
  if (bx <= 0) {
    p2.sco += 1;
    bx = w/2;
    by = h/2;
    diry = 0;
    dirx = 3;
    dif = 3;
  }
}

function scoreTxt() {
  textSize(70);
  fill(0, 255, 0, 200);
  textStyle(BOLD);
  textAlign(CENTER);
  text(p1.sco, w/2 - 50, 100);
  text(':', w/2, 100);
  text(p2.sco, w/2 + 50, 100);
  fill(255);
}
