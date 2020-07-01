const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.numberOfCards = this.deck.length;
        this.incorrectGuesses = [];
    }

    takeTurn(answer) {
        const currentTurn = new Turn(answer, this.returnCurrentCard());

        this.incrementTurns();
        this.moveToNextCard();
        this.checkAnswer(currentTurn);
        return currentTurn.giveFeedback();
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    incrementTurns() {
        this.turns++;
    }

    moveToNextCard() {
        this.deck.cards.shift();
    }

    checkAnswer(currentTurn) {
        if (currentTurn.answer !== currentTurn.card.correctAnswer) {
            this.incorrectGuesses.push(currentTurn.answer);
        }
    }

    calculatePercentCorrect() { 
        return Math.floor(100 - (this.incorrectGuesses.length / this.numberOfCards) * 100);
    }

    endRound() {
        return `Round over! You answered ${this.calculatePercentCorrect()}% questions correctly!`;
    }
}

module.exports = Round;

