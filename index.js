var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

var result = "Refresh Me"
if (randomNumber1 > randomNumber2){
  result = "🚩Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result = "Player2 Wins!🚩";
} else {
  result = "Draw!";
}
document.querySelector("h1").innerHTML = result;
