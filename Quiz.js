class Quiz {
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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(50);
    fill("red");
    stroke("white");
    strokeWeight(3);
    text("RESULT", 390, 200 );

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
    {
      textSize(20);
      fill("black");
      stroke("white");
      strokeWeight(1);
      text("The winners are highlighted in green color ! ", 310, 240);

      var sam = 240;
     
      for(var plr in allContestants)
      {
        var a = "2";
        if(a === allContestants[plr].answer)
        
          fill("green");

        else
        
          fill("red");
        
        sam = sam+40;
      textSize(20);
      text(allContestants[plr].name+":"+allContestants[plr].answer, 400, sam);
    //write code to add a note here
      }
      //write code to highlight contest who answered correctly
    
    
  }
  }
}
