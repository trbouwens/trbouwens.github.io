var nNum = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
var tNum = ["111", "111", "1111"];
var xNum = ["111", "111", "1111"];


function setup() {

    randomize0();
    randomize1();
    randomize2();
    randomize3();
    randomize4();
    randomize5();
    randomize6();
    randomize7();
    randomize8();
    randomize9();
    randomizeT0();
    randomizeT1();
    randomizeT2();
    randomizeX0();

    createCanvas(720, 720);
    but0 = createButton("0");
    but1 = createButton("1");
    but2 = createButton("2");
    but3 = createButton("3");
    but4 = createButton("4");
    but5 = createButton("5");
    but6 = createButton("6");
    but7 = createButton("7");
    but8 = createButton("8");
    but9 = createButton("9");
    but0.position(86, 30);
    but1.position(122, 30);
    but2.position(162, 30);
    but3.position(316, 30);
    but4.position(356, 30);
    but5.position(396, 30);
    but6.position(520, 30);
    but7.position(560, 30);
    but8.position(600, 30);
    but9.position(640, 30);
    but0.mousePressed(randomize0);
    but1.mousePressed(randomize1);
    but2.mousePressed(randomize2);
    but3.mousePressed(randomize3);
    but4.mousePressed(randomize4);
    but5.mousePressed(randomize5);
    but6.mousePressed(randomize6);
    but7.mousePressed(randomize7);
    but8.mousePressed(randomize8);
    but9.mousePressed(randomize9);

    butT0 = createButton("XYZ");
    butT1 = createButton("ABC");
    butT2 = createButton("LMNO");
    butT0.position(122, 270);
    butT1.position(350, 270);
    butT2.position(550, 270);
    butT0.mousePressed(randomizeT0);
    butT1.mousePressed(randomizeT1);
    butT2.mousePressed(randomizeT2);

    butX0 = createButton("Generate Number")
    butX0.position(310, 510);
    butX0.mousePressed(randomizeX0);
}

function draw() {
    textSize(86);
    background(29, 31, 33);
    text("(" + nNum[0] + nNum[1] + nNum[2] + ") - " + nNum[3] + nNum[4] + nNum[5] + " - " + nNum[6] + nNum[7] + nNum[8] + nNum[9], 360, 120);
    text("(" + tNum[0] + ") - " + tNum[1] + " - " + tNum[2], 360, 360);
    text("(" + xNum[0] + ") - " + xNum[1] + " - " + xNum[2], 360, 600);
    textAlign(CENTER);
    textFont("Courier_N ew");
    fill(255);
}

function randomize0() {
    var x = floor(random(0, 10));
    nNum[0] = x;
}

function randomize1() {
    var x = floor(random(0, 10));
    nNum[1] = x;
}

function randomize2() {
    var x = floor(random(0, 10));
    nNum[2] = x;
}

function randomize3() {
    var x = floor(random(0, 10));
    nNum[3] = x;
}

function randomize4() {
    var x = floor(random(0, 10));
    nNum[4] = x;
}

function randomize5() {
    var x = floor(random(0, 10));
    nNum[5] = x;
}

function randomize6() {
    var x = floor(random(0, 10));
    nNum[6] = x;
}

function randomize7() {
    var x = floor(random(0, 10));
    nNum[7] = x;
}

function randomize8() {
    var x = floor(random(0, 10));
    nNum[8] = x;
}

function randomize9() {
    var x = floor(random(0, 10));
    nNum[9] = x;
}

function randomizeT0() {
    var x = floor(random(100, 1000));
    tNum[0] = x;
}

function randomizeT1() {
    var x = floor(random(100, 1000));
    tNum[1] = x;
}

function randomizeT2() {
    var x = floor(random(100, 10000));
    tNum[2] = x;
}

function randomizeX0() {
    var x = floor(random(100, 1000));
    xNum[0] = x;
    var y = floor(random(100, 1000));
    xNum[1] = y;
    var z = floor(random(1000, 10000));
    xNum[2] = z;
}
