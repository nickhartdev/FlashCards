const chai = require('Chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

    it.skip('should be a function', function() {
        const game = new Game();
        expect(Game).to.be.a('function');
    });

    it.skip('should be an instance of Game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceOf(Game);
    });

    it.skip('should keep track of the current round', function() {
        const game = new Game();

        expect(game.currentRound).to.equal(0);

        game.round.takeTurn();
        game.round.takeTurn();

        expect(game.currentRound).toEqual(2);
    });

    it.skip('should start the game', function() {
        const game = new Game();
        expect(game.start()).to.exist();
    });

    it.skip('should have cards', function() {
        const game = new Game();

        game.start();

        expect(game.cards).to.exist;
        expect(game.cards).to.be.an.instanceOf(Card);
    });

    it.skip('should keep the cards in a deck', function() {
        const game = new Game();

        game.start();

        expect(game.deck).to.exist;
        expect(game.deck).to.be.an.instanceOf(Deck);
    });

    it.skip('should be able to start a new round', function() {
        const game = new Game();

        game.start();

        expect(game.round).to.exist;
        expect(game.round).to.be.an.instanceOf(Round);
    });

    it('should invoke printMessage', function() {

    });

    it('should invoke printQuestion', function() {

    });
})