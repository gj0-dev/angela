gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
   let randomNumber = Math.floor(Math.random() * 4 );
    console.log(randomNumber);
    let randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    var audio = new Audio('"\\sounds\\" + randomChosenColour + ".mp3"');
    audio.play();
};

nextSequence();




