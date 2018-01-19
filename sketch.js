var caseTaille = 50;
var offset = 40;
var bob = new Peon();

var cache;
function preload() {
  cache = loadImage('cache.png');
}


var labyrinthe = [
	['k','b','b','b','f','b','b','b','b','h'],
	['e','h','e','m','b','h'],
	['j','g','d','d','d','g']
];

var correspondance = {
	'a': [0,0,0,0],
	'b': [1,0,0,0],
	'c': [0,1,0,0],
	'd': [0,0,1,0],
	'e': [0,0,0,1],
	'f': [1,0,1,0],
	'g': [0,1,0,1],
	'h': [1,1,0,0],
	'i': [0,1,1,0],
	'j': [0,0,1,1],
	'k': [1,0,0,1],
	'l': [0,1,1,1],
	'm': [1,0,1,1],
	'n': [1,1,0,1],
	'o': [1,1,1,0]
};

function setup() {
	createCanvas(640, 480);
}

function draw() {

	if(bob.etat=='static') {
		bob.detectClick();
	}

	background(25);

	translate(offset,offset);
	// for(var y=0; y < labyrinte.length; y++) {
	// 	for(var x=0; x < labyrinte[y].length; x++) {
	// 		for(var i=0; i < labyrinte[y][x].length; i++) {
	// 			stroke(255);
	// 			noFill();
	// 			drawLine(i,x,y,labyrinte[y][x][i]);
	// 		}
	// 	}
	// }
	for(var y=0; y < labyrinthe.length; y++) {
		for(var x=0; x < labyrinthe[y].length; x++) {
			stroke(255);
			noFill();
			drawLineNew(labyrinthe[y][x],x,y);
		}
	}
	bob.update();
	bob.display();

}

function mouseMoved() {
	return false;
}

function drawLineNew(type,x,y) {
	strokeWeight(2);
	stroke(255,255,255,50);
	// haut
	if(type=='b' || type=='f' || type=='h' || type=='k' || type=='m' || type=='n' || type=='o') {
		stroke(255,255,255,255);
	}
	line(x*caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille);
	stroke(255,255,255,50);

	// droite
	if(type=='c' || type=='g' || type=='h' || type=='i' || type=='l' || type=='n' || type=='o') {
		stroke(255,255,255,255);
	}
	line(x*caseTaille+caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille+caseTaille);
	stroke(255,255,255,50);

	// bas
	if(type=='d' || type=='f' || type=='i' || type=='j' || type=='l' || type=='m' || type=='o') {
		stroke(255,255,255,255);
	}
	line(x*caseTaille+caseTaille, y*caseTaille+caseTaille, x*caseTaille, y*caseTaille+caseTaille);
	stroke(255,255,255,50);

	// gauche
	if(type=='e' || type=='g' || type=='j' || type=='k' || type=='l' || type=='m' || type=='n') {
		stroke(255,255,255,255);
	}
	line(x*caseTaille, y*caseTaille, x*caseTaille, y*caseTaille+caseTaille);
	stroke(255,255,255,50);
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