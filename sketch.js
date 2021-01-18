const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var a,b,c;
var engine,world;

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity() ;

  let options={
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,options);

  a=random(0,255);
  b=random(0,255);
  c=random(0,255);

  pendulum1 = new Pendulum(340, 450, "white");
  pendulum2 = new Pendulum(400, 450, "grey");
  pendulum3 = new Pendulum(460, 450, "black");
  pendulum4 = new Pendulum(520, 450, "white"); 
  pendulum5 = new Pendulum(580, 450, "grey");
  pendulum6 = new Pendulum(640, 450, "black");

  sling1 = new Sling(pendulum1.body, { x: 340, y: 200 }); 
  sling2 = new Sling(pendulum2.body, { x: 400, y: 200 }); 
  sling3 = new Sling(pendulum3.body, { x: 460, y: 200 }); 
  sling4 = new Sling(pendulum4.body, { x: 520, y: 200 }); 
  sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
  sling6 = new Sling(pendulum6.body, { x: 640, y: 200 });

  
}


function draw() {
   rectMode(CENTER);
   background(a,b,c);
  
   Engine.update(engine);
   pendulum1.display();
   pendulum2.display();
   pendulum3.display();
   pendulum4.display();
   pendulum5.display();
   pendulum6.display();
   sling1.display();
   sling2.display();
   sling3.display();
   sling4.display();
   sling5.display();
   sling6.display();
}


function mouseDragged(){
	
		Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
	
}

