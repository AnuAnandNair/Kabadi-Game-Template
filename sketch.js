var player1, database;
var position,position2;
var player2;
var p1animation,p2animation;
var gameState;
var player1Score;
var player2Score;

function preload(){
    p1animation =loadAnimation("assests/player1a.png","assests/player1b.png","assests/player1a.png");
    p2animation =loadAnimation("assests/player2a.png","assests/player2b.png","assests/player2a.png");
}

function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(600,600);

  
}

function draw(){
  background("white");

  
    drawSprites();
  
}

function writePosition(x,y){
  
}

function writePosition2(x,y){
  
}

function readPosition(data){
  
}

function readPosition2(data){
  
}

function readGS(data){
  
}

function readScore1(data1){
  
}

function readScore2(data2){
  
}





function drawline(){
  
}

function drawline1(){
  
}

function drawline2(){
  
}
