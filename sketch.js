var fixedRect,movingRect
var box1,box2




function setup() {
  createCanvas(600,400);
  fixedRect = createSprite(100,200,30,80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";

fixedRect.velocityX = 5;
movingRect.velocityX = -5;

box1 = createSprite(100,300,30,80);
box1.shapeColor = "red";

box2 = createSprite(400,300,80,30);
box2.shapeColor = "blue";

box1.velocityX = 5;
box2.velocityX = -5;

}

function draw() {
  background("pink");

  bounceOff(movingRect,fixedRect);
  bounceOff(box1,box2);






  drawSprites();
}

