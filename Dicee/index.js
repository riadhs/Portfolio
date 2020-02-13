



function action(){

  var music = new Audio('https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg');
  music.play();

  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;

  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomImageSource1 = "images/"+ randomDiceImage1;

  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/"+ randomDiceImage2;

  document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎈Player1 wins!🎈";
  }else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🎈Player2 wins!🎈";
  }else{
    document.querySelector("h1").innerHTML ="draw!";
  }

}
