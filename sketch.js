var caseTaille = 50;
var offset = 40;
var bob;
var init = false;

var cache;
function preload() {
  cache = loadImage('assets/cache.png');
  chooseMale = loadImage('assets/male.png');
  chooseFemale = loadImage('assets/female.png');
}

function setup() {
	createCanvas(640, 480);
}

function draw() {
    textFont('Open Sans');
    background(25);
    if(init===false) {
        // choix de l'avatar
        chooseDisplay();

    } else if(init===true) {
        // labyrinthe et peon a afficher
    	if(bob.etat=='static') {
    		bob.detectClick();
    	}
    	translate(offset,offset);
    	for(var y=0; y < labyrinthe.length; y++) {
    		for(var x=0; x < labyrinthe[y].length; x++) {
    			stroke(255);
    			noFill();
    			drawLineNew(labyrinthe[y][x],x,y);
                if(y==labyrinthe.length-1 && x==labyrinthe[y].length -1) {
                    fill(255,255,255);
                    rectMode(CORNER);
                    rect(caseTaille*x+10,caseTaille*y+10,caseTaille-20,caseTaille-20);
                }
    		}
    	}
        for(var p = 0; p < particules.length; p++) {
            particules[p].update();
            particules[p].display();
            if(particules[p].size < 0.25) {
                particules.splice(particules[p],1);
            }
        }
    	bob.update();
    	bob.display();
    }

    fill(255,0,0);
    // text('Pixels parcouru : '+bob.pixelParcouru+'px', 0, -20);

}

function mouseClicked() {
    if(init===false) {
        chooseClick();
    }
}
