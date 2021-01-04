var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxS1,boxS2,boxS3,box1body,box2body,box3body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(RIGHT);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxS1 = createSprite(470,645,100,20);
	boxS2 = createSprite(420,645,100,20);
	boxS3 = createSprite(width/2,655,20,100);
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	box1body = new box(470,645,100,20,{isStatic:true});
	World.add(world,box1body);
	box2body = new box(420,645,100,20,{isStatic:true});
	World.add(world,box2body);
	box3body = new box(width/2,655,20,100,{isStatic:true});
	World.add(world,box3body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  //Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  boxS1.x = box1body.x;
  boxS2.x = box2body.x;
  boxS3.x = box3body.x;
  boxS1.y = box1body.y;
  boxS2.y = box2body.y;
  boxS3.y = box3body.y;

  boxS1.display();
  boxS2.display();
  boxS3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}