var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  
  createCanvas(400,200);
  
  monkey = createSprite(50,150,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(5,185,800,10);
  ground.velocityX =-7;
 
  


}


function draw() {
 
  background(300);

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")) {
    monkey.velocityY = -12;
  
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  spawnobstacles();
  spawnbanana()
  
  drawSprites();
}

function spawnobstacles(){
  
  if (frameCount % 110 === 0){
   var obstacle = createSprite(350,145,40,40);
    obstacle.addImage("obstacle",obstacleImage);  
   obstacle.velocityX = -6;
    obstacle.scale = 0.18;
   obstacle.lifetime = 200;
    
    
    
  }
    
}

 function spawnbanana(){
    if (frameCount % 100 === 0) {
    var banana = createSprite(600,20,40,10);
    banana.y = Math.round(random(50,10));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    }
   
   
   
   
   
   
   
   
 }






