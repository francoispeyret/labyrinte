var particules = [];

function Particule (x,y,direction){
    this.x = x;
    this.y = y;
    this.vel = 0.1;
    this.life = random(0.2,0.6); // si grand alors vie moins longtemps
    this.size = random(6,12);

    this.display = function() {
        fill(255,255,255,100);
        noStroke();
        rectMode(CENTER);
        //rect(this.x,this.y,this.size,this.size);
        ellipse(this.x,this.y,this.size);
    };

    this.update = function() {
        this.size -= this.life;

        switch (direction) {
            case 0:
                this.y += this.vel;
                break;
            case 1:
                this.x -= this.vel;
                break;
            case 2:
                this.y -= this.vel;
                break;
            case 3:
                this.x += this.vel;
                break;
        }
    };

    this.delete = function() {

    };
}
