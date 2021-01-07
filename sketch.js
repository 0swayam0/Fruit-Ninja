var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit;

var fruitChoice;

var fruitGroup,enemyGroup;

var score=0;

var swordImage,fruitImage1,fruitImage2,fruitImage3,fruitImage4, enemyImage1,enemyImage2,gameOver;

function preload(){
  
  swordImage=loadImage("sword.png");
  
  fruitImage1=loadImage("fruit1.png");
  fruitImage2=loadImage("fruit2.png");
  fruitImage3=loadImage("fruit3.png");
  fruitImage4=loadImage("fruit4.png");
  
  enemyImage=loadAnimation("alien1.png","alien2.png");

  gameOver=loadImage("gameover.png");
}

function setup(){
  createCanvas(600,600);
  
  sword=createSprite(50,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
  background("aqua");
  
  fill("black");
  textSize(22);
  text("Score:"+ score,510,18);
  
   if(gameState===PLAY){
     sword.x=mouseX;
     sword.y=mouseY;
     
     fruitFun();
     enemyFun();
     
     if(fruitGroup.isTouching(sword)){
       fruitGroup.destroyEach();
       score=score+1;
  }
  
     if(enemyGroup.isTouching(sword)){
       gameState=END;
  }   
  }
  
  if(gameState===END){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    
    fruit.velocityX=0;
    enemy.velocityX=0;
    
    sword.addImage(gameOver);
    sword.x=300
    sword.y=300;
    sword.scale=1;
    
  }

  drawSprites();
}

function fruitFun (){
  if(frameCount%80===0){
    fruit=createSprite(650,0,20,20);
    fruit.y=Math.round(random(100,530));
    fruit.velocityX=-4;
    fruitGroup.add(fruit);
    fruit.scale=0.17;
    fruitChoice=Math.round(random(1,4)); 
    
  if(fruitChoice==1){
     fruit.addAnimation("moving",fruitImage1); 
  }
  
   if(fruitChoice==2){
     fruit.addAnimation("moving",fruitImage2); 
  }
  
   if(fruitChoice==3){
     fruit.addAnimation("moving",fruitImage3); 
  }
  
   if(fruitChoice==4){
     fruit.addAnimation("moving",fruitImage4); 
  }
  }
}

function enemyFun(){
 
  if (frameCount%200===0){
  enemy=createSprite(650,0,20,20);
  enemy.y=Math.round(random(100,530));
  enemy.velocityX=-4;
  enemy.addAnimation("moving",enemyImage);
  enemyGroup.add(enemy);
  enemy.scale=0.8; 
  }
}
