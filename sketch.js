var ninja;
var ground;
var block;
var block1;
var block2;
var gravity = 7, jump = 12;

function setup() {
  var canvas = createCanvas(800, 600);

  ninja = createSprite(100,100,50,80);
  ninja.shapeColor = "yellow";
  ground = createSprite(400,600,canvas.width,50);
  block = createSprite(500,500,200,50);
  block1 = createSprite(200,400,200,50);
  block2 = createSprite(500,300,200,50);

}

function draw() {
  background(0);  

  collide(ninja,block);
  collide(ninja,block1);
  collide(ninja,block2);
  collide(ninja,ground);
  
  move(ninja);
  drawSprites();
}

function collide(ninja,block){
  if(ninja.isTouching(block)){
    ninja.collide(block);
    if(keyDown(UP_ARROW)){
      ninja.velocityY -= jump;
    }
    ninja.velocityY = 0;
  }else{
    ninja.velocityY = ninja.velocityY + gravity;
  }
  
  
}

