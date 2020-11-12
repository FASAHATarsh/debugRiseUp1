/*
<================================================================================>
<===================  all copyrights preserved IronArshXS Fasahat   =============>
<================================================================================>

*/



// constant decleration 

const Engine=Matter.Engine;

const World=Matter.World;

const Bodies=Matter.Bodies;

const Render=Matter.Render;

var balloon,ball,bg,bg_img;


// gameStates

var gameState = "l1";


// common variable declartion


    // pyramid structure obs
    var lay1,lay2,lay3,lay4,lay5;

    var slabs,balls;
    





// function preload to load images

function preload()
{

   bg_img =  loadImage("images/bg.png");

}


// function setup 

function setup()
 {

    createCanvas(600,700);

    engine=Engine.create();

    world=engine.world;
     
    var render=Render.create({
        element: document.body,
        engine: engine,
        options: {
            width:1600,
            height: 700,
            wireframes: false
        }
    });
    Render.run(render);



    balloon =new Balloon(300, 500);

    ball = new Ball(300,450,40);
    
    bg = createSprite(300,300,600,700);
    bg.scale=1.5;
    bg.y =bg.height;
    
    bg.addImage("background",bg_img);

    obs1();

    obs2();

  
}



// function to loof]p the background image 


function bgLoop()
{ 

    bg.velocityY=2;

    if(bg.y>600)
    {

        bg.y =400;
        
    }

}

/* this series of function will be used to create 
different predefined obstacle series for 
different levels 
*/

function obs1()
{


    lay1 = new Quad(300,300,250,20);
    
   
    lay2 = new Quad(300,250,200,20);
   
    
    lay3 = new Quad(300,200,150,20);
   
    
    lay4 = new Quad(300,150,100,20);
   
    
    lay5 = new Quad(300,100,50,20);
    
    
    //console.log("yes");

}

function obs2()
{

    //this is for slabs and top balls

    
    
   for (var i =0; i<20; i++)
    {
        slabs = new Quad(300,50+(i*20),300,10)
         
           
    }
    for (var x =0; x<10; x++)
    {
       balls = new Circle(100+(x*20),100,20)
         
          
    }
    

}
// draw function to draw the objects on screen

function draw() 
{

    background(0); 

    Engine.update(engine); 

    bgLoop();

    drawSprites();

    ball.display();

    balloon.display();
    
    if (gameState==="l1")
    {
        lay1.display();

        lay2.display();

        lay3.display();

        lay4.display();
        
        lay5.display();
        if(frameCount <500 )
        {
       //     console.log("framecount");
            gameState="l2";
        }
    }

    if (gameState==="l2")
    {
        balls.display(); 
    
        slabs.display(); 
    }

    
 
}
