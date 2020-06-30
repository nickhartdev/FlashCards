class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    takeTurn() {
        this.incrementTurns();
    }

    incrementTurns() {
        this.turns++;
    }
}

module.exports = Round;

