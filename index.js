var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imageSource1 = "images/dice" + randomNumber1 + ".png";
var imageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", imageSource1);
image1.setAttribute("src", imageSource2);

var result = "Refresh Me"
if (randomNumber1 > randomNumber2){
  result = "🚩Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result = "Player2 Wins!🚩";
} else {
  result = "Draw!";
}
document.querySelector("h1").innerHTML = result;
