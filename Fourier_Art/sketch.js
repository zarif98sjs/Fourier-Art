let time = 0;
let wave = []; 

function setup()
{
    createCanvas(1000,800);
}

function draw()
{
    background(10,100,0);
    translate(400,400);

    let radius = 150;
    stroke(255);
    noFill();
	ellipse(0,0,radius*2);
	
	let x = radius * cos(time);
	let y = radius * sin(time);
	wave.push(y);

	for(let i = 0;i<wave.length;i++)
	{
		point(i+radius,wave[i]);
	}

	fill(255);
	line(0,0,x,y);
	ellipse(x,y,10);

    time += 0.1;
}