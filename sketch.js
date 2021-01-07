var backgroundImage,backgroundS
var redBalloon,redS
var blueBalloon,blueS
var greenBalloon,greenS
var pinkBalloon,pinkS
var bow,bowS
var arrow,arrowS
var redG;
var blueG;
var greenG;
var pinkG;
var arrowG;
var Score=0;

function preload(){
backgroundImage=loadImage("background0.png") 
redBalloon=loadImage("red_balloon0.png")
blueBalloon=loadImage("blue_balloon0.png")
greenBalloon=loadImage("green_balloon0.png")
pinkBalloon=loadImage("pink_balloon0.png")
bow=loadImage("bow0.png")
arrow=loadImage("arrow0.png")  
}

function setup() {
  createCanvas(600, 600);
  backgroundS=createSprite(0,0,600,600)  
  backgroundS.addImage("backgroundS",backgroundImage)
  backgroundS.scale=2.5;
    
  bowS=createSprite(450,300,10,10)
  bowS.addImage("bow0.png",bow)
  
  redG=createGroup()
  blueG=createGroup()
  greenG=createGroup()
  pinkG=createGroup()
  arrowG=createGroup()
}

function draw() {
  bowS.y=mouseY  
  if (keyDown("space")){
      arrow2()
      
  }
  if(frameCount%60==0)
  {  
  
  var r = Math.round(random(1,4))
  console.log(r)
  switch(r)
  {
      case 1:populateRed()
      break
      case 2:populateBlue()
      break
      case 3:populateGreen()
      break
      case 4:populatePink()
      break
  }
      if(arrowG.isTouching(redG)){
        arrowG.destroyEach();
        redG.destroyEach();
        Score=Score+1
      }
      if(arrowG.isTouching(blueG)){
        arrowG.destroyEach();
        blueG.destroyEach();
        Score=Score+1
      }   
      if( arrowG.isTouching(greenG)){
        arrowG.destroyEach();
        greenG.destroyEach();
        Score=Score+1
      }
      if(arrowG.isTouching(pinkG)){
        arrowG.destroyEach();
        pinkG.destroyEach();
        Score=Score+1
      }
  }    
  drawSprites() 
  text("Score:"+Score,300,300)
   
}
function arrow2(){
   
  arrowS=createSprite(360,100,5,10);
  arrowS.addImage("arrow0.png",arrow)
  arrowS.velocityX = -6;
  arrowS.scale = 0.3;
  arrowS.y=bowS.y
  arrowG.add(arrowS)
  //return arrowS

}
function populateRed(){
    i=random(20,500)
    redS=createSprite(60,i,40,40)
    redS.addImage("red_balloon0.png",redBalloon)
    redS.scale=.1;
    redS.velocityY = -3
    redS.lifetime = 120;
    redG.add(redS)
}
function populateGreen(){
    i=random(20,500)
    greenS=createSprite(110,i,40,40)
    greenS.addImage("green_ballon0.png",greenBalloon)
    greenS.scale=.1;
    greenS.velocityY = 3
    //greenS.lifetime = 120;
    greenG.add(greenS)
}
function populateBlue(){
    i=random(20,500)
    blueS=createSprite(160,i,40,40)
    blueS.addImage("blue_balloon0.png",blueBalloon)
    blueS.scale=.1;
    blueS.velocityY = 3
    blueS.lifetime = 120;
    blueG.add(blueS)
}
function populatePink(){
    i=random(20,500)
    pinkS=createSprite(210,i,40,40)
    pinkS.addImage("pink_balloon0.png",pinkBalloon)
    pinkS.velocityY = -3
    pinkS.lifetime = 120;
    pinkG.add(pinkS)
}
