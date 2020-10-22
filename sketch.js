var tower,towerimg,ghost,ghostimg,climber,climberimg,invisibleblock,invisibleblockGroup,climbersGroup,door,doorimg,doorGroup,spookySound;
var gameState='play';

function preload(){
  towerimg=loadImage("tower.png");
  ghostimg=loadImage("ghost-standing.png");
  climberimg=loadImage("climber.png");
  doorimg=loadImage("door.png");
  
  spookySound=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
 //spookySound.loop();
  
  tower=createSprite(300,300);
  tower.addImage(towerimg);
  tower.velocityY=1;
  
  doorGroup=new Group();
  climbersGroup=new Group();
  invisibleblockGroup=new Group();
  
  ghost=createSprite(200,200);
  ghost.addImage(ghostimg);
  ghost.scale=0.3;
  
}

function draw(){
  background(0);
  
  if(gameState==="play"){
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0;
    }
    if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
      ghost.destroy();
      gameState="end"
    }

  
  if(keyDown("left_Arrow")){
    ghost.x-=3;
  }
  
  if(keyDown("right_Arrow")){
    ghost.x+=3;
  }
  
  if(keyDown("space")){
    ghost.velocityY-=10;
  }
  
 ghost.velocityY++
  
  if(tower.y>400){
    tower.y=300
  }
  
   drawSprites();
  spawnDoors();
  }
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("GameOver",230,250);
  }
}

function spawnDoors(){
  if(frameCount%240===0){
    door=createSprite(200,-50);
    climber=createSprite(200,10);
    invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    door.x=Math.round(random (120,400))
    climber.x=door.x;
    invisibleblock.x=door.x;
    door.addImage(doorimg);
    climber.addImage(climberimg);
    door.velocityY=1;
    climber.velocityY=1;
    invisibleblock.velocityY=1;
    ghost.depth=door.depth-1;
    door.lifetime=600;
    climber.lifetime=600;
    invisibleblock.lifetime=600;
    doorGroup.add(door);
    climbersGroup.add(climber);
    invisibleblockGroup.add(invisibleblock);
  }
}
















