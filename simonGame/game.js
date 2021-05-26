let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function(){

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

})

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
        }else{
        console.log("wrong");
    }
    
};


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};
