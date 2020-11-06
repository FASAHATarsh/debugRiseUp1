const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var balloon,ball,bg,bg_img;
var obstacle=[];



function preload(){
  bg_img =  loadImage("images/bg.png");

}
function setup() {
  createCanvas(600,700);
  engine=Engine.create();
  world=engine.world;
 balloon =new Balloon(300, 550);
  ball = new Ball(300,450,10);
  bg = createSprite(0,0)
  bg.addImage("background",bg_img);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  bgLoop();
  drawSprites();
  ball.display();
  balloon.display();
  bringIn();
  
}

function bgLoop()
{
  bg.velocityY=2;
  if(bg.y<0){
    bg.y =bg.height/2;
  }
}

function bringIn()
{

    for(var i =0;i<10;i++)
    {
     obstacle [i]= new Obstacle(i+50,100,10,10);
     obstacle[i].display()
    }
}