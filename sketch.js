
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var r1,r2,r3;
var ball;
var ground,dustb,dustp;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.`
	r1=new dust(290 , 590 , 20 , 150);
	r2=new dust(400 , 650 , 200 , 20);
  r3=new dust(500 , 590 , 20 , 150);
  

	ball=new paper(100,200)

	ground = new Ground(680 ,680, 1600 , 10);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  
  
  r1.display();
  r2.display();
  r3.display();
  ball.display();
  ground.display();
  drawSprites();

}

function keyPressed(){
 
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:-500});
   
  }

  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-500,y:-500});
   
  }
}



