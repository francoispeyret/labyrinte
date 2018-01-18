var caseTaille = 50;
var offset = 40;
var bob = new Peon();

var cache;
function preload() {
  cache = loadImage('cache.png');
}

var labyrinte = [
	[
		[1,0,1,2],
		[1,0,1,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,1,0,0]
	],[
		[1,0,0,1],
		[1,1,0,0],
		[0,1,0,1],
		[1,1,0,1],
		[0,1,0,1],
		[1,0,0,0],
		[1,0,1,0],
		[1,0,0,0],
		[1,0,0,1],
		[1,0,1,0],
		[0,1,1,0],
	],[
		[0,1,0,1],
		[0,0,1,1],
		[0,0,1,0],
		[0,1,0,0],
		[0,1,0,1],
		[0,1,0,0],
		[1,1,0,1],
		[0,1,1,0],
		[0,0,1,0],
		[1,1,1,0],
		[1,2,0,0],
	],[
		[0,0,1,1],
		[1,1,0,0],
		[1,0,1,1],
		[0,1,1,0],
		[0,0,1,1],
		[0,0,1,0],
		[0,0,1,0],
		[0,0,1,0],
		[0,0,1,0],
		[0,0,1,0],
		[0,1,1,0],
	]
];

function setup() {
	createCanvas(640, 480);
}

function draw() {

	background(25);

	translate(offset,offset);
	for(var y=0; y < labyrinte.length; y++) {
		for(var x=0; x < labyrinte[y].length; x++) {
			for(var i=0; i < labyrinte[y][x].length; i++) {
				stroke(255);
				noFill();
				drawLine(i,x,y,labyrinte[y][x][i]);
			}
		}
	}
	bob.update();
	bob.display();

}

function mousePressed() {
	if(bob.etat=='static') {
		bob.detectClick();
	}
	return false;
}

function drawLine(position,x,y,color) {
	if(color==1) {
		strokeWeight(2);
		stroke(255,255,255,255);
	} else if(color==2) {
		strokeWeight(1);
		stroke(255,0,0,255);
	} else {
		strokeWeight(1);
		stroke(255,255,255,50);
	}
	switch (position) {
		case 0:
			// stroke(255,0,0);
			line(x*caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille);
		break;
		case 1:
			// stroke(0,255,0);
			line(x*caseTaille+caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille+caseTaille);
		break;
		case 2:
			// stroke(255,255,255);
			line(x*caseTaille+caseTaille, y*caseTaille+caseTaille, x*caseTaille, y*caseTaille+caseTaille);
		break;
		case 3:
			// stroke(0,0,255);
			line(x*caseTaille, y*caseTaille, x*caseTaille, y*caseTaille+caseTaille);
		break;
	}
}
