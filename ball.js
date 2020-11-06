//for ball 

class Ball{
    constructor(x, y,radius) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
       this.image= loadImage("images/circle.png");

       this.radius = radius;
        World.add(world, this.body);
      } 
      display(){
          this.body.position.x=mouseX;
          this.body.position.y=mouseY;
          
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        
        image(this.image,0, 0,this.radius*3.5,this.radius*3.5);
        pop();
       
      }
}