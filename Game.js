class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4];
    car1.addImage(car1_Img)
    car2.addImage(c2)
    car3.addImage(c3)
    car4.addImage(c4)
  }
  play(){
    form.hide();
    textSize(20);
    text("gameStart",120,100)
    Player.getplayerinfo();
    if(allplayers!==undefined){
      background("#c68767")
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index=0;
      //var position=130;
      var x=175;
      var y;
      for (var plr in allplayers ){
        index=index+1
        x=x+200
        y=displayHeight-allplayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
        cars[index-1].shapeColor="red";
       camera.position.x=displayWidth/2
       camera.position.y=cars[index-1].y
      } 
        
    }
      }
      if(keyIsDown(UP_ARROW)){
        player.distance=player.distance+50
        player.update();
      }
      drawSprites();
    }
  }
