const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
<<<<<<< Updated upstream
      util.main(round);
=======
    util.main(round);
  }

  start() {

>>>>>>> Stashed changes
  }
}

module.exports = Game;