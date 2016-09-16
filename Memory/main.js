/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = 'king';
var cardFour = "king";
*/


/*if (cardTwo === cardFour) {
	alert ("You found a match!")
} else {
	alert ("Sorry, try again.")
} */


var gameBoard = document.getElementById('game-board');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var createBoard = function() {
	for ( var i = 0; i < cards.length; i++) {
		var playingCard = document.createElement('div');
		playingCard.className = 'card';
		playingCard.setAttribute('data-card', cards[i]);
		playingCard.addEventListener('click', isTwoCards)
		gameBoard.appendChild(playingCard);
	}
}

var isMatch = function(array) {
	if (array[0] === array[1]) {
		alert ("You found a match!")
	} else {
		alert ("Sorry, try again.")
	}

	for (var i = 0; i < cards.length; i++) {
		document.getElementByClassName('card')[i].innerHTML = " ";
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	this.innerHTML = '<img src=" ' +this.getAttribute('data-card') + '.jpg" id="image">'

		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}

createBoard();