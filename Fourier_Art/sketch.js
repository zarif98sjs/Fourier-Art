let time = 0;

function setup()
{
    createCanvas(1000,800);
}

function draw()
{
    background(10,100,0);
    translate(200,200);

    let radius = 50;
    stroke(255);
    noFill();
    ellipse(0,0,radius*2);

    time += 0.01;
}