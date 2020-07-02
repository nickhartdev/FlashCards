const chai = require('Chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {

    it('should be a function', function() {
        const game = new Game();
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should have a way of keeping track of the current round', function() {
        const game = new Game();
        expect(game.currentRound).to.exist;
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
    });

    it('should have a currentRound property that returns the current round', function() {
        const game = new Game();
        const cards = game.generateCards();
        const deck = game.createDeck(cards);

        expect(game.currentRound).to.deep.equal(game.startNewRound(deck));
    });
})