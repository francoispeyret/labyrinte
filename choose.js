var chooseComplete = false;

function chooseDisplay() {

    pop();

    rectMode(CORNER);
    noStroke();

    // MALE
    if(chooseHover()==='male'){
        fill(31)
    } else {
        fill(0,196,255);
    }
    rect(80,90,200,300);
    image(chooseMale,90,90,180,308);

    // FEMALE
    if(chooseHover()==='female'){
        fill(31)
    } else {
        fill(255,0,129);
    }
    rect(340,90,200,300);
    image(chooseFemale,328,90,224,308);
    fill(255);

    textAlign(CENTER);
    textSize(28);
    text('Choisissez un avatar',320,460);
    push();
}

function chooseHover() {
    if(
        mouseX > 80 &&
        mouseX < 280 &&
        mouseY > 90 &&
        mouseY < 390) {
        return 'male';
    }
    if(
        mouseX > 340 &&
        mouseX < 540 &&
        mouseY > 90 &&
        mouseY < 390) {
        return 'female';
    }
}

function chooseClick() {
    if(chooseHover()==='male') {
        bob = new Peon('male');
        transition=255;
        chooseComplete = true;
    } else if (chooseHover()==='female') {
        bob = new Peon('female');
        transition=255;
        chooseComplete = true;
    }
}
