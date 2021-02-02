var garden,gardenImg;
function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here
     garden=createSprite(250,200,500,400);
    // garden.addImage(gardenImg);
}

function draw() {

    background(55);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
