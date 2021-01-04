class Stone{
    constructor(x, y) {
        var options = {
            isStatic: false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,20, options);
        this.radius = 20;
      
        this.image = loadImage("Plucking+mangoes/sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
}