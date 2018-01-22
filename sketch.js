var caseTaille = 50;
var offset = 40;
var bob;
var step = 0;
var transition = 255;

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
    console.log(step);
    textFont('Open Sans');
    background(25);

    if(step===1 || step===0) {
        // choix de l'avatar
        chooseDisplay();

    } else if(step===2) {
        // labyrinthe et peon a afficher
    	if(bob.etat=='static') {
    		bob.detection();
    	}
    	translate(offset,offset);

        labyrintheDisplay();

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



    if(transition>0) {
        fill(25,25,25,transition);
        rect(0,0,width,height);
        transition -= 3;
    }
    if(transition<=0 && chooseComplete===true) {
        step = 2;
    }

}

function mouseClicked() {
    if(step===0) {
        chooseClick();
    }
}
