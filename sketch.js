var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,1000);
  fixedRect = createSprite(500,200,50,80);
  movingRect = createSprite(500,500,80,50);

fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";

fixedRect.debug = true;
movingRect.debug = true;

fixedRect.velocityY = 3;
movingRect.velocityY = -3;

}

function draw() {
  background(0);
  


  bounceOff(movingRect,fixedRect);

  drawSprites();
}

function bounceOff(object1,object2){

  if(object1.x - object2.x < object2.width/2+object1.width/2 &&
    object2.x - object1.x < object2.width/2+object1.width/2 
    ){
      object2.velocityX = object2.velocityX*(-1)
      object1.velocityX = object1.velocityX*(-1)
    }

    if(object1.y - object2.y < object2.height/2+object1.height/2 &&
      object2.y - object1.y < object2.height/2+object1.height/2 
      ){
        object2.velocityY = object2.velocityY*(-1)
        object1.velocitY = object1.velocityY*(-1)
      }


}