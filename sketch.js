const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var rand;
var maxDrops=100;

function preload(){
    
}

function setup(){
  createCanvas(400,700); 
   if(frameCount%150===0){
     for(var i=0;i<maxDrops;i++){
       drops.push(new createDrops(random(0,400),random(0,400)));  
     }  
   } 
}

function draw(){
  background("black");
  drops.display();  
}   

