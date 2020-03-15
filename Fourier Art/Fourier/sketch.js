let time = 0;
let wave = []; 
let signalX = [];
let signalY = [];
let fourierTransformSignalX;
let fourierTransformSignalY;

function setup()
{
	createCanvas(1000,800);

	for(let i = 0; i<100; i++)
	{
		angle = map(i,0,100,0,TWO_PI);
		//signalX[i] = 100*cos(angle);
		signalX[i] = 200*noise(angle);
	}
		
	for(let i = 0; i<100; i++)
	{
		angle = map(i,0,100,0,TWO_PI);
		//signalY[i] = 100*sin(angle); //random(-250,100);
		signalY[i] = 150*noise(angle+100);
	}

	//signal = [100,100,100,-100,-100,-100,100,100,100,-100,-100,-100];
	fourierTransformSignalX = dft(signalX);
	fourierTransformSignalY = dft(signalY);
}

function epiCycles(x,y,fourierTransformSignal,rotation)
{
	for(let i=0;i<fourierTransformSignal.length;i++)
	{
		let prevx = x;
		let prevy = y;

		let freq = fourierTransformSignal[i].freq;
		let radius = fourierTransformSignal[i].amp;
		let phase = fourierTransformSignal[i].phase;
	
		x += radius * cos(freq * time + phase + rotation);
		y += radius * sin(freq * time + phase + rotation);
		
		
		stroke(255,100);
		noFill();
		ellipse(prevx,prevy,radius*2);

		//fill(255);
		stroke(255);
		line(prevx,prevy,x,y); 
	}

	return createVector(x,y);
}

function draw()
{
    background(10,100,0);

	translate(200,100);

	let vx = epiCycles(400,50,fourierTransformSignalX,0);
	let vy = epiCycles(50,300,fourierTransformSignalY,HALF_PI);

	let v = createVector(vx.x,vy.y);
	wave.unshift(v);

	line(vx.x,vx.y,v.x,v.y);
	line(vy.x,vy.y,v.x,v.y);

	beginShape();
	noFill();
	for(let i = 0;i<wave.length;i++)
	{
		vertex(wave[i].x,wave[i].y);
	}
	endShape();

	const dt = TWO_PI / fourierTransformSignalY.length;
    time += dt;
}