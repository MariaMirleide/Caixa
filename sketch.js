var caixa; 
function setup() {
  createCanvas(400,400);
caixa= createSprite(200,200,30,30);
}

function draw() 
{
  background("#f7d794");
  if (keyDown("right")){
    caixa.position.x +=5;
  }
  if (keyDown("left")){
    caixa.position.x -=5;
  }
  if (keyDown("up")){
    caixa.position.y -=5;
  }
  if (keyDown("down")){
    caixa.position.y +=5;
  }
drawSprites ();
}




