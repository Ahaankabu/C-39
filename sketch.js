var  backgroundImage;

var gameState = 0;
var playerCount;

var database;
var car1,car2,car3,car4;
var cars;
var form, player, game;
var allplayers;
var car1_Img,c2,c3,c4,track,ground;
function preload(){
  car1_Img=loadImage("images/car1.png")
  c2=loadImage("images/car2.png")
  c3=loadImage("images/car3.png")
  c4=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
  ground=loadImage("images/ground.png")

}


function setup(){
   createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database()
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
