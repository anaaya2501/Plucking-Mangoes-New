
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ground;
var tree;
var m1,m2,m3;
var boy;
var stone;
var rope1;

function preload()
{
	boy= loadImage("Plucking+mangoes/sprites/boy.png")
	tree=loadImage("Plucking+mangoes/sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,40);
	//tree = new Tree(600,430,400,500);
	m1 = new Mango(500,380);
	m2 = new Mango(600,250);
	m3 = new Mango(700,350);
	stone = new Stone(30,550);
	rope1= new Rope(stone.body, {x:30,y:550})
	Engine.run(engine);
  
}


function draw() {
 
  background(255);
ground.display();
 //tree.display();
 
 imageMode(CENTER)
 image(tree,550,400,300,600)
 image(boy, 100, 600,200,200);
 m1.display();
 m2.display();
 m3.display();
 rope1.display();
 stone.display();
 detectcollision(stone, m1);
 detectcollision(stone, m2);
 detectcollision(stone, m3);

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope1.fly();
   
}

function detectcollision(lstone,lmango){

 // mangoBodyPosition=lmango.body.position
  //stoneBodyPosition=lstone.body.position
  
  var distance=dist(lstone.body.position.x, lstone.body.position.y, lmango.body.position.x, lmango.body.position.y)

  	if(distance<=lmango.radius+lstone.radius)
    {
      Matter.Body.setStatic(lmango.body,false);
    }

  }


