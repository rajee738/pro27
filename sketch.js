const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(600, 500);

  var bobDiameter = 50;
	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	roof = new Roof(300, 100, 300, 20);

	bob1 = new Bob(180, 400, 50);
	bob2 = new Bob(230, 400, 50);
	bob3 = new Bob(300, 400, 50);
	bob4 = new Bob(340, 400, 50);
	bob5 = new Bob(390, 400, 50);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();
  
  drawSprites();
 
}

