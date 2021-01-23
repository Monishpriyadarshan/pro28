const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2;
var backgroundImg,platform;
var rock, slingShot;

function preload() {
    backgroundImg = loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810,350,70,70);
    mango4 = new Mango(810,260,70,70);


    rock = new rock(100,100);

    slingShot = new Sling(rock.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    mango1.display();
    mango2.display();
    ground.display();
	mango3.display();

    rock.display();
    platform.display();

    sling.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}