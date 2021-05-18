var randomNumber1 = (Math.floor(Math.random() *6 +1 )) ;
var randomNumber2 = (Math.floor(Math.random() *6 +1 )) ;

var url = "images\\dice" + randomNumber1 + ".png";
var url2 = "images\\dice" + randomNumber2 + ".png";

document.querySelector('.img1').src = url;
document.querySelector('.img2').src = url2;

if(randomNumber1 == randomNumber2){
    document.querySelector('h1').innerText = 'Draw!';
}

    else if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerText = 'Player 1 Wins!';
    }

    else{
    document.querySelector('h1').innerText = 'Player 2 Wins!'; 
    }