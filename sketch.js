const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var man,walking_1,walking_2,walking_3,walking_4,walking_5,walking_6,walking_7,walking_8,ground;

function preload(){
    man = loadAnimation ("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");

    
}

function setup(){
    createCanvas(400,800);
    ground.x = ground.width/2;
    //camera.x = displayWidth/2;
    ground.velocityX = 0;
    

  

   
    
}

function draw(){
    background(0,0)
    if (ground.x < 0){
        ground.x = ground.width/2;
       camera.position.x = displayWidth/2;
       //camera.y = displayHeight/2;
       
      }
  
    
}   

