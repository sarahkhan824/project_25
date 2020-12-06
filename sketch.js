
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var garbage, ground, log1,log2;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 garbage = new Paper(500,20,10);
ground = new Ground(0,600,1900,30);
log1= new Dustbin(500,580,150,10);
log2= new Dustbin(500,515,150,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  keyPressed();
  background("white");
  garbage.display();
  ground.display();
  log1.display();
  log2.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce( garbage.body,garbage.body.position,{x:2,y:-0.8})
  }
  }

