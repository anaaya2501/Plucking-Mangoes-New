class Mango {
   constructor(x,y){
var options= {
    isStatic:true,
    restitution: 0,
    friction:1
}
    this.body= Bodies.circle(x,y,50,options);
    this.radius = 50;

    this.image= loadImage("Plucking+mangoes/sprites/mango.png")
    World.add(world,this.body);

   }
   
   display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image, 0, 0,this.radius,this.radius);
    pop();
   }
}