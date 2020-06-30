const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    takeTurn(answer) {
        const currentTurn = new Turn(answer, this.returnCurrentCard());

        this.incrementTurns();
        this.moveToNextCard();
        this.checkAnswer(currentTurn.answer, currentTurn.card);
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

    checkAnswer(answer, card) {
        if (answer !== card.correctAnswer) {
            this.incorrectGuesses.push(answer);
        }
    }
}

module.exports = Round;

