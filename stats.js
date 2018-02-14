
var titleSuccessSize = 0;
var titleTransition = [0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1];
var titleNumber = [0,0,0,0,0];
var titleNumberMax = [2545,2600,120,70,50];

function successTitle() {
    fill(255);
    textAlign(CENTER);
    if(titleTransition[0] < 42)
        titleTransition[0] += 1;
    textSize(titleTransition[0]);
    text('Victoire !', width/2, 100);

    if(titleTransition[1] < 22 && titleTransition[0] >= 42)
        titleTransition[1] += 1;
    if(titleNumber[0] <= Math.ceil(bob.pixelParcouru))
        titleNumber[0] += Math.ceil(bob.pixelParcouru)/100;

    textSize(22);
    text(Math.ceil(titleNumber[0])+' pixels parcourus', width/2, 160);

    if(titleTransition[2] < 22 && titleTransition[1] >= 22)
        titleTransition[2] += 1;
    if(titleNumber[1] <= titleNumberMax[1])
        titleNumber[1] += titleNumberMax[1]/100;

    text(titleNumber[1]+' octes téléchargés', width/2, 190);

    if(titleTransition[3] < 22 && titleTransition[2] >= 22)
        titleTransition[3] += 1;
    if(titleNumber[2] <= titleNumberMax[2])
        titleNumber[2] += titleNumberMax[2]/30;

    text(titleNumber[2]+' labyrinthes résolus', width/2, 220);

    if(titleTransition[4] < 22 && titleTransition[3] >= 22)
        titleTransition[4] += 1;

    if(titleNumber[3] <= titleNumberMax[3])
        titleNumber[3] += titleNumberMax[3]/10;
    text(titleNumber[3]+' hommes', width/2, 250);

    if(titleTransition[5] < 22 && titleTransition[4] >= 22)
        titleTransition[5] += 1;

    if(titleNumber[4] <= titleNumberMax[4])
        titleNumber[4] += titleNumberMax[4]/10;
    text(titleNumber[4]+' femmes', width/2, 280);

    if(titleTransition[6] < 255 && titleTransition[5] >= 22)
        titleTransition[6] += 10;

    textSize(42);
    fill(255,255,255,titleTransition[6]);
    text('BONNE ANNÉE', width/2, 380);

    if(titleTransition[7] < 255 && titleTransition[6] >= 255)
        titleTransition[7] += 10;

    fill(255,255,255,titleTransition[7]);
    text('201', width/2 - 16, 420);
    fill(255,0,0,titleTransition[7]);
    text('9', width/2 + 30, 420);


}
