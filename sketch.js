function setup() {
  createCanvas(800,400);
 fixed = createSprite(200, 100, 50, 80);
moving = createSprite(200,200,80,30);
fixed.shapeColor = "pink"
moving.shapeColor = "pink"
fixed.velocityY =  1
moving.velocityY = -1
gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
//moving.x = World.mouseX
//moving.y = World.mouseY
fixed.debug = "true"
moving.debug = "true"
bounceOff(fixed,moving);
if(isTouching(gameoobject2, gameObject1)){
 gameObject2.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
}
else {
gameobject2.shapeColor = "green";
  gameObject1.shapeColor = "green";
}
  drawSprites();
}
