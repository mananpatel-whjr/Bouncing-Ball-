var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(400,580,100,20);
    block1.shapeColor="red";
    block2=createSprite(520,580,100,20);
    block2.shapeColor="blue";
    block3=createSprite(630,580,100,20);
    block3.shapeColor="green";
    block4=createSprite(740,580,100,20);
    block4.shapeColor="orange";
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="black";
    ball.velocityX=9;
    ball.velocityY=7;
    //create 4 different surfaces
    edges=createEdgeSprites()


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges);




if (ball.isTouching(block1)) {
    ball.shapeColor="red"
    ball.bounceOff(block1);
}
if (ball.isTouching(block2)) {
    ball.shapeColor="blue"
    ball.bounceOff(block2);
}
if (ball.isTouching(block3)) {
    ball.shapeColor="green"
    ball.bounceOff(block3);
}
if (ball.isTouching(block4)) {
    ball.shapeColor="orange"
    ball.bounceOff(block4);
} 
    drawSprites();
}
