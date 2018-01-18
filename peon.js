

function Peon() {

	this.x = 0;
	this.y = 0;
	this.nextX = 0;
	this.nextY = 0;
    this.caseX = 0;
    this.caseY = 0;
    this.w = 20;
	this.sexe = 'male';
    this.etat = 'static';

	this.update = function() {
        if(this.etat=='move') {
            if(this.y > this.nextY){
                this.y = this.y-2;
            } else if(this.x < this.nextX) {
                this.x = this.x+2;
            } else if(this.y < this.nextY) {
                this.y = this.y+2;
            } else if(this.x > this.nextX) {
                this.x = this.x-2;
            } else {
                this.etat='static';
            }
        }
	};

	this.display = function() {
        noStroke();
        fill(255);
        push();
        rectMode(CENTER);
		rect(this.x+caseTaille/2,this.y+caseTaille/2,this.w,this.w);
		imageMode(CENTER);
		image(cache, this.x+caseTaille/2,this.y+caseTaille/2);
        pop();
        fill(255,0,0,150);
        // haut
        triangle(this.x + 5, this.y, this.x + caseTaille/2, this.y - 5, this.x + caseTaille - 5, this.y);
        // droit
        triangle(this.x + caseTaille+1, this.y + 5, this.x + caseTaille+6, this.y + caseTaille/2, this.x + caseTaille+1, this.y + caseTaille - 5);
        // bas
        triangle(this.x + 5, this.y + caseTaille +1, this.x + caseTaille/2, this.y + caseTaille+6, this.x + caseTaille, this.y + caseTaille+1);
        // gauche
        triangle(this.x, this.y + 5, this.x - 5, this.y + caseTaille/2, this.x, this.y + caseTaille);

        // noFill();
        // stroke(0,255,0);
        // rect(this.x+caseTaille,this.y,caseTaille,caseTaille);
        // rect(this.x-caseTaille,this.y,caseTaille,caseTaille);
        // rect(this.x,this.y-caseTaille,caseTaille,caseTaille);
        // rect(this.x,this.y+caseTaille,caseTaille,caseTaille);
	};

    this.detectClick = function() {

        // haut
        if(
            mouseX > this.x + offset &&
            mouseX < this.x + caseTaille + offset &&
            mouseY < this.y + offset &&
            mouseY > this.y - caseTaille + offset) {
            this.move(0);
        }
        // droite
        if(
            mouseX > this.x + caseTaille + offset &&
            mouseX < this.x + caseTaille + caseTaille + offset &&
            mouseY > this.y + offset &&
            mouseY < this.y + caseTaille + offset) {
            this.move(1);
        }
        // bas
        if(
            mouseX > this.x + offset &&
            mouseX < this.x + caseTaille + offset &&
            mouseY > this.y + caseTaille + offset &&
            mouseY < this.y + caseTaille + caseTaille + offset) {
            this.move(2);
        }
        // gauche
        if(
            mouseX < this.x + offset &&
            mouseX > this.x - caseTaille + offset &&
            mouseY > this.y + offset &&
            mouseY < this.y + caseTaille + offset) {
            this.move(3);
        }

    };

    this.move = function(direction) {
        if(this.detectWall(direction)==0) {
            this.etat = 'move';
            switch (direction) {
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

    this.detectWall = function(direction) {
        var destination = labyrinte[this.caseY][this.caseX];
        var result = destination[direction];
        return result;
    }

}
