var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup()
{
    createCanvas(400, 400); 

    //To use angle in Degrees
    angleMode(DEGREES);

    strokeWeight(7);
    textSize(30);
}

function draw()
{
    background(0);

    fill("white");
    text("Clock", 160, 40);

    //Translation and rotation 
    translate(200, 200);
    rotate(-90);

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr % 12, 0, 12, 0, 360);

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0, 0, 255);
    line(0, 0, 50, 0);
    pop();

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0, 255, 0);
    line(0, 0, 75, 0);
    pop();

    //drawing seconds hand
    push();
    rotate(scAngle);
    stroke(255, 0, 0);
    line(0, 0, 100, 0);
    pop();

    //drawing the arcs
    noFill();

    //Hour
    stroke(0, 0, 255);
    arc(0, 0, 240, 240, 0, hrAngle);

    //Minutes
    stroke(0, 255, 0);
    arc(0, 0, 260, 260, 0, mnAngle);

    //Seconds
    stroke(255, 0, 0);
    arc(0, 0, 280, 280, 0, scAngle);
}