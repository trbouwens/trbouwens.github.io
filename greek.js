var letters = ["\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396", "\u0397", "\u0398", "\u0399", "\u039A",
               "\u039B", "\u039C", "\u039D", "\u039E", "\u039F", "\u03A0", "\u03A1", "\u03A3", "\u03A4", "\u03A5",
               "\u03A6", "\u03A7", "\u03A8", "\u03A9", ""];

var words = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa",
             "Lamda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon",
             "Phi", "Chi", "Psi", "Omega", " "];

var tworth = 0;
// The numbers
var lN = 24;
var mN = 24;
var rN = 24;

function setup() {
  createCanvas(720, 720);
  randomize();
  but = createButton("Click to generate");
  but.position(300, 200);
  but.size(120, 24);
  but.mousePressed(randomize);
}

function draw() {
  textSize(128);
  background(29, 31, 33);
  // clear();

  // line(360, 0, 360, 720);
  // line(0, 360, 720, 360);

  if(tworth == 0 || tworth == 2) {
    text(letters[lN], 260, 360);
    text(letters[mN], 360, 360);
    text(letters[rN], 460, 360);
    textSize(32);
    text(words[lN] + " " + words[mN] + " "+ words[rN], 360, 460);
    fill(242, 242, 242);
  }
  else {
    text(letters[lN], 300, 360);
    text(letters[mN], 420, 360);
    textSize(32);
    text(words[lN] + " " + words[mN], 360, 460);
    fill(242, 242, 242);
  }
  textAlign(CENTER, CENTER);
}

function randomize() {
  tworth = floor(random(0, 3));
  if(tworth == 0 || tworth == 2) {
    lN = floor(random(0, 24));
    mN = floor(random(0, 24));
    rN = floor(random(0, 24));
  }
  else {
    lN = floor(random(0, 24));
    mN = floor(random(0, 24));
    rN = 24;
  }
}
