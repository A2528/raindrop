const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7; 
var box8;
var box9;
var box10;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box2=new Raindrop(200,310,50,50);
    box1 = new Raindrop();
    box3 = new Raindrop();
    box4 = new Raindrop();
    box5 = new Raindrop();
    box6 = new Raindrop();
    box7 = new Raindrop ();
    box8 = new Raindrop();
    box9 = new Raindrop();
    box10 = new Raindrop();
    box11 = new Raindrop();
    box12 = new Raindrop();
    box13 = new Raindrop();
    box14 = new Raindrop();
    box15 = new Raindrop();
    box16 = new Raindrop();
    box17 = new Raindrop();
    box18 = new Raindrop();
    box19 = new Raindrop();
    box20 = new Raindrop();
    box21 = new Raindrop();
    box22 = new Raindrop();
    box23 = new Raindrop();
    box24 = new Raindrop();
    box25 = new Raindrop();
    box26 = new Raindrop();
    box27 = new Raindrop();
    box28 = new Raindrop();
    box29 = new Raindrop();
    box30 = new Raindrop();
    box31 = new Raindrop();
    box32 = new Raindrop();
    box33 = new Raindrop();
    box34 = new Raindrop();
    box35 = new Raindrop();
    ground = new Ground(200,380,400,5);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box1.move();
    box2.display();
    box2.move();
   ground.display();
   
   box3.display();
   box3.move();
   box4.display();
   box4.move();
   box5.display();
   box5.move();
   box6.display();
   box6.move();
   box7.display();
   box7.move();
   box8.display();
   box8.move();
   box9.display();
   box9.move();
   box10.display();
   box10.move();
}