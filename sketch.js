var chef;
var chefimage;
var bgimage;
var in2;

function preload()
{
  chefimage=loadImage("Sprites/Chef2.png");
  bgimage=loadImage("Sprites/BG.jpg");
  ingredient1_img=loadImage("Sprites/ingredient1.jpg");
  ingredient2_img=loadImage("Sprites/ingredient2.jpg");
  ingredient3_img=loadImage("Sprites/ingredient3.jpg");
  ingredient4_img=loadImage("Sprites/ingredient4.png");
  ingredient5_img=loadImage("Sprites/ingredient5.PNG");
  ingredient6_img=loadImage("Sprites/ingredient6.png");
  ingredient7_img=loadImage("Sprites/ingredient7.PNG");
  ingredient8_img=loadImage("Sprites/ingredient8.PNG");
  ingredient9_img=loadImage("Sprites/ingredient9.jpg");

}





function setup() {
  createCanvas(displayWidth-75,displayHeight-125);
  chef=createSprite(400, 200, 50, 50);
  
  chef.addImage("chefimage",chefimage);
  chef.scale=1;
  chef.shapeColor="red";
  

}

function draw() {
  background("white");
  
  if(keyDown("RIGHT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= 5;
  }
  if(keyDown("LEFT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= -5;
  }
  console.log(chef.y);
  camera.position.x=displayWidth/2;
 // camera.position.y=chef.y;
  spawnIngredients();
  drawSprites();
}
function spawnIngredients()
{
  if(frameCount%200===0)
  {
    var rand=random(100,2000)
    in2 =createSprite(rand,-500,40,40);
    in2.velocityY=2;
    var r= Math.round(random(1,9));
    console.log(r)
    switch(r)
    {
      case 1:in2.addImage(ingredient1_img);
      in2.scale=0.6;
      break;
      case 2:in2.addImage(ingredient2_img);
      in2.scale=0.5;
      break;
      case 3:in2.addImage(ingredient3_img);
      in2.scale=0.5;
      break;
      case 4:in2.addImage(ingredient4_img);
      in2.scale=0.5;
      break;
      case 5:in2.addImage(ingredient5_img);
      in2.scale=0.5;
      break;
      case 6:in2.addImage(ingredient6_img);
      in2.scale=0.5;
      break;
      case 7:in2.addImage(ingredient7_img);
      in2.scale=0.2;
      break;
      case 8:in2.addImage(ingredient8_img);
      in2.scale=0.2;
      break;
      case 9:in2.addImage(ingredient9_img);
      in2.scale=0.5;
      break;
    }
  }
}