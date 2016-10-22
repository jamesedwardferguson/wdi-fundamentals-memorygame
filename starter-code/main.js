console.log("JS file is connected to HTML! Woo!")
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

// if (cardOne === cardTwo){
//   alert('You found a match!');
// }else {
//  alert('Sorry, try again.');
// } 

var board = document.getElementById('game-board');

var createCards = function() {
for (var i=0; i<cards.length; i++){
var cardElement = document.createElement('div');
cardElement.className = 'card';
board.appendChild(cardElement);
}

}