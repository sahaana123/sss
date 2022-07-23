
var spacegreen
var robot
var robotrunning
var robotvillain
var fireball

function preload(){
robot=loadImage("Robot_running.png")
robotvillain=loadImage("Robot_villain.png")
spacegreen=loadImage("imagr space 2.webp")
fireball=loadImage("Fireball.png")
}

function setup(){
createCanvas(600,600);

spacegreen=createSprite(300,300);
spacegreen.addImage(spacegreen)
spacegreen.velocityY= 1;

fireballsGroup= new Group()
robot=createSprite


}
function draw(){
background(180);
drawSprites();
}
doorsGroup=new Group()
  climbersGroup=new Group()
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg)
  ghost.scale=0.3;
  



