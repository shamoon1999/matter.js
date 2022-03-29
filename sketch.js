
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball_2;
var box;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.9,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  var options = {
    restitution: 0.005,
    frictionAir: 0.003
  }
  ball_2 = Bodies.circle(375,30,30,options)
  World.add(world,ball_2);
  
  var box_options ={
  restitution: 0.9,
  density: 1,

}
  box = Bodies.rectangle(200,0,30,30,box_options);
  World.add(world,box);

  

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball_2.position.x,ball_2.position.y,30) 
  rect(box.position.x,box.position.y,30,30);
}
  
