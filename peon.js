
function Peon(sexe) {

	this.x = 0;
	this.y = 0;
	this.nextX = 0;
	this.nextY = 0;
    this.caseX = 0;
    this.caseY = 0;
	this.direction = 1;
    this.w = 20;
	this.vel = 2;
	this.sexe = sexe;
    this.etat = 'static';
	this.pixelParcouru = 0;

	this.update = function() {
        if(this.etat=='move') {
			this.pixelParcouru += this.vel;
            if(this.y > this.nextY){
				if(random(0,5)>2.5) this.createParticules(0);
                this.y = this.y-this.vel;
            } else if(this.x < this.nextX) {
				if(random(0,5)>2.5) this.createParticules(1);
                this.x = this.x+this.vel;
            } else if(this.y < this.nextY) {
				if(random(0,5)>2.5) this.createParticules(2);
                this.y = this.y+this.vel;
            } else if(this.x > this.nextX) {
				if(random(0,5)>2.5) this.createParticules(3);
                this.x = this.x-this.vel;
            } else {
                this.etat='static';
            }
        }
	};

	this.display = function() {
        noStroke();
		if(this.sexe=='male') {
			fill(0,196,255);
		} else if (this.sexe=='female') {
			fill(255,0,129);
		}
        push();
        rectMode(CENTER);
		rect(this.x+caseTaille/2,this.y+caseTaille/2,this.w,this.w);
        rectMode(CORNER);
		imageMode(CENTER);
		image(cache, this.x+caseTaille/2,this.y+caseTaille/2);
        pop();
	};

    this.detectClick = function() {
        var infiniti = 800;
        // haut
        if(
            mouseX > this.x + offset &&
            mouseX < this.x + caseTaille + offset &&
            mouseY < this.y + offset &&
            mouseY > this.y - infiniti + offset) {
            this.move(0);
        }
        // droite
        if(
            mouseX > this.x + caseTaille + offset &&
            mouseX < this.x + caseTaille + infiniti + offset &&
            mouseY > this.y + offset &&
            mouseY < this.y + caseTaille + offset) {
            this.move(1);
        }
        // bas
        if(
            mouseX > this.x + offset &&
            mouseX < this.x + caseTaille + offset &&
            mouseY > this.y + caseTaille + offset &&
            mouseY < this.y + caseTaille + infiniti + offset) {
            this.move(2);
        }
        // gauche
        if(
            mouseX < this.x + offset &&
            mouseX > this.x - infiniti + offset &&
            mouseY > this.y + offset &&
            mouseY < this.y + caseTaille + offset) {
            this.move(3);
        }

    };

    this.move = function(direction) {
		this.direction = direction;
        if(this.detectWall(this.direction)===0) {
            this.etat = 'move';
            switch (this.direction) {
                case 0:
                    this.caseY--;
                    this.nextY -= caseTaille;
                    break;
                case 1:
                    this.caseX++;
                    this.nextX += caseTaille;
                    break;
                case 2:
                    this.caseY++;
                    this.nextY += caseTaille;
                    break;
                case 3:
                    this.caseX--;
                    this.nextX -= caseTaille;
                    break;
            }
        }
    };

    this.detectWall = function() {
		var destination = labyrinthe[this.caseY][this.caseX];
		switch (this.direction) {
			case 0:
				if(typeof labyrinthe[this.caseY-1]==='undefined')
					return false;
				break;
			case 1:
				if(typeof labyrinthe[this.caseY][this.caseX+1]==='undefined')
					return false;
				break;
			case 2:
				if(typeof labyrinthe[this.caseY+1]==='undefined')
					return false;
				break;
			case 3:
				if(typeof labyrinthe[this.caseY][this.caseX-1]==='undefined')
					return false;
				break;
		}
		return correspondance[destination][this.direction];
    }

	this.createParticules = function() {
		var particuleX = this.x + caseTaille/2 + random(-10,10);
		var particuleY = this.y + caseTaille/2 + random(-10,10);
		particules.push(new Particule(particuleX,particuleY,this.direction));
	}

}
