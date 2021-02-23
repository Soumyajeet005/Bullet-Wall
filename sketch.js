var wall,thickness;
var bullet,speed,weight;
var wallGroup

function setup() {
  createCanvas(1600, 400);

  wallGroup = createGroup ();
  
  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  wallGroup.add(wall);
  
  weight = random(30,52);
  speed = random(223,321);

bullet = createSprite(200,height/2,30,20);
bullet.velocityX=speed;



}

function draw() {
  background('orange'); 

  if(bullet.isTouching(wallGroup)){
    bullet.velocityX=0;
   var damage = 0.5*speed*weight/thickness*thickness*thickness

   if(damage<10){
     bullet.shapeColor="green";
   }
   else if(damage>10){
    bullet.shapeColor="red";
   }


  }

  drawSprites();
}

