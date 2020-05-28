var helicopterIMG, helicopterSprite, packageSprite,packageIMG, clouds, clouds2, cloudsIMG;
var packageBody,ground
var soldier,SoldierIMG,soldier2;
var paddle1,paddle2,paddle3;
var packageSprite2,packageBody2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	cloudsIMG=loadImage("clouds.png")
	SoldierIMG=loadImage("soldier.gif")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	packageSprite2=createSprite(width/2, 80, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	clouds=createSprite(100,200,10,10);
	clouds.addImage(cloudsIMG)
	clouds.scale=0.1

	clouds2=createSprite(700,200,10,10);
	clouds2.addImage(cloudsIMG)
	clouds2.scale=0.1

	
	paddle1 = createSprite(width/2,height-50,200,20);
	paddle1.shapeColor = "red";
	
	paddle2 = createSprite(width/1.63,620,20,100);
	paddle2.shapeColor = "red";

	paddle3 = createSprite(width/2.73,620,20,100);
	paddle3.shapeColor = "red";
	
	soldier=createSprite(-100,625,10,10);
	soldier.addImage(SoldierIMG)
	soldier.scale=0.2

	soldier2=createSprite(-100,625,10,10);
	soldier2.addImage(SoldierIMG)
	soldier2.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40,20,0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 


  if(soldier.isTouching(packageSprite)){
	packageSprite.destroy();
	}
	if(soldier2.isTouching(packageSprite2)){
		packageSprite2.destroy();
		}
	
packageSprite.collide(paddle1);
packageSprite2.collide(paddle1);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	soldier.velocityX= 6;
	soldier2.velocityX= 3;
	Matter.Body.setStatic(packageBody2,false);
}
}



