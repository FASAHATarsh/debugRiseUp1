const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var balloon,ball,bg,bg_img;
var obstacle=[];
var tower=[];


function preload(){
  bg_img =  loadImage("images/bg.png");

}
function setup() {
  createCanvas(600,700);
  engine=Engine.create();
  world=engine.world;
 balloon =new Balloon(300, 550);
  ball = new Ball(300,450,10);
  //console.log(ball.body);
  bg = createSprite(0,0)
  bg.addImage("background",bg_img);
  for(var i=0;i<5;i++)
  {
    

//   tower[i]=new Obstacle(i*100,50,30,10);
    //obstacle [i]= new Obstacle(i*100,100,50,10);
    tower[i]= new Obstacle(270-(i-5),50,100+(i*40),30);
  //tower[i]= new Obstacle(i*20,10,20,30);
    
    //console.log("yes");

  }
  
  
  
}

function draw() {
  background(0); 
  Engine.update(engine); 
  bgLoop();
  drawSprites();
  ball.display();
  balloon.display();
 // bringIn();
 for(var x = 0;x<tower.length;x++)
 {
   tower[x].display();
  // obstacle[x].display();
 }
}
function bgLoop()
{
  bg.velocityY=2;
  if(bg.y<0){
    bg.y =bg.height/2;
  }
}

/*function bringIn()
{

    for(var i =0;i<10;i++)
    {
     
     obstacle[i].display()
    }
}
*/