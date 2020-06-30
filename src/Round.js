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
}

module.exports = Round;

