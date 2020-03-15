let time = 0;
let wave = []; 
let slider;

function setup()
{
	createCanvas(1000,800);
	slider = createSlider(1,100,1);
}

function draw()
{
    background(10,100,0);
    translate(200,400);

    stroke(255);
	noFill();
	
	let x = 0;
	let y = 0;

	for(let i=0;i<slider.value();i++)
	{
		let prevx = x;
		let prevy = y;

		let n = 2*i+1;
		let radius = 100 * ((4/n)/PI);
	
		x += radius * cos(n * time);
		y += radius * sin(n * time);
		

		stroke(255,100);
		noFill();
		ellipse(prevx,prevy,radius*2);

		//fill(255);
		stroke(255);
		line(prevx,prevy,x,y);
	}

	wave.unshift(y);

	translate(200,0);
	line(x-200,y,0,wave[0]);

	beginShape();
	noFill();
	for(let i = 0;i<wave.length;i++)
	{
		vertex(i,wave[i]);
	}
	endShape();

    time += 0.05;
}