var mR, fR, car, wall

function setup() {
  createCanvas(800,800);
  fR = createSprite(300, 300, 50, 50);
  fR.shapeColor = "grey";

  mR = createSprite(300,300,40,20);
  mR.shapeColor = "red";

  car = createSprite(20,100,50,20);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(550,100,20,100);
  wall.shapeColor = "grey";


}

function draw() {
  background("black");  

  mR.x = mouseX;
  mR.y = mouseY

  if(Math.abs(mR.x - fR.x) <= mR.width/2 + fR.width/2 &&
     Math.abs(mR.y - fR.y) <= mR.height/2 + fR.height/2){
       fR.shapeColor = "green";
       mR.shapeColor = "yellow";
  }
  else{
    fR.shapeColor = "grey";
    mR.shapeColor = "red";
  }

  if(Math.abs(car.x - wall.x) <= car.width/2 + wall.width/2){
    car.velocityX = car.velocityX * (-1);
  }

  drawSprites();
}