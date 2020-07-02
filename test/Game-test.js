const chai = require('Chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a way to start', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it('should create an array of cards when it starts', function() {
    const game = new Game();

    expect(game.generateCards()).to.be.an('array');
    expect(game.generateCards()[0]).to.be.an.instanceOf(Card);
  });

  it('should store the array of cards in a deck when it starts', function() {
    const game = new Game();
    const cards = game.generateCards();

    expect(game.createDeck(cards)).to.be.an('object');
    expect(game.createDeck(cards)).to.be.an.instanceOf(Deck);
  });

  it('should create a new Round instance using the Deck', function() {
    const game = new Game();
    const cards = game.generateCards();
    const deck = game.createDeck(cards);

    expect(game.startNewRound(deck)).to.be.an('object');
    expect(game.startNewRound(deck)).to.be.an.instanceOf(Round);
  });

  it('should have a currentRound property that returns the current round', function() {
    // By running this test, it will actually start the game in order to
    // check the current round. Feel free to exit the process.

    const game = new Game();

    game.start();

    expect(game.currentRound).is.an.instanceOf(Round);
  });
})