
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d, d2, d3;
var ground,paper;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	d = new Dustbin(1000,670,170,20);
	d2 = new Dustbin(905,620,20,120);
	d3 = new Dustbin(1095,620,20,120);

	ground = new Ground(600,690,1200,20);

	paper = new Paper(100,360,40);
}


function draw() {
  background(255);

  Engine.update(engine);
  paper.display();
  ground.display();
  d.display();
  d2.display();
  d3.display();

 
  
}
function keyPressed() {
	if (keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:-90});
  }
	
  if (keyCode === LEFT_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:-185,y:-90});
  }
}
