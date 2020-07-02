class Turn {
  constructor(answer, card) {
    this.answer = answer;
    this.card = card;
  }

  returnGuess() {
    return this.answer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.answer === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() === true ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;