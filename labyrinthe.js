
var labyrinthe = [
	['k','f','b','b','f','b','b','b','b','h'],
	['e','h','g','m','b','h','g','m','f','h'],
	['l','g','j','f','d','g','g','k','f','i'],
	['n','j','f','h','k','d','a','a','f','c'],
	['e','f','h','j','i','a','i','g','k','i'],
	['g','n','j','f','b','f','f','i','j','o'],
	['g','j','f','f','i','k','h','k','f','h'],
	['j','f','f','f','f','i','j','d','o','l'],
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

function drawLineNew(type,x,y) {
	strokeWeight(1);
	stroke(255,255,255,50);
	// haut
	if(type=='b' || type=='f' || type=='h' || type=='k' || type=='m' || type=='n' || type=='o') {
        strokeWeight(2);stroke(255,255,255,255);
	}
	line(x*caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille);
	strokeWeight(1);
    stroke(255,255,255,50);

	// droite
	if(type=='c' || type=='g' || type=='h' || type=='i' || type=='l' || type=='n' || type=='o') {
		strokeWeight(2);stroke(255,255,255,255);
	}
	line(x*caseTaille+caseTaille, y*caseTaille, x*caseTaille+caseTaille, y*caseTaille+caseTaille);

	strokeWeight(1);
    stroke(255,255,255,50);

	// bas
	if(type=='d' || type=='f' || type=='i' || type=='j' || type=='l' || type=='m' || type=='o') {
		strokeWeight(2);stroke(255,255,255,255);
	}
	line(x*caseTaille+caseTaille, y*caseTaille+caseTaille, x*caseTaille, y*caseTaille+caseTaille);

	strokeWeight(1);
    stroke(255,255,255,50);

	// gauche
	if(type=='e' || type=='g' || type=='j' || type=='k' || type=='l' || type=='m' || type=='n') {
		strokeWeight(2);stroke(255,255,255,255);
	}
	line(x*caseTaille, y*caseTaille, x*caseTaille, y*caseTaille+caseTaille);

	strokeWeight(1);
    stroke(255,255,255,50);
}
