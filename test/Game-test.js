const chai = require('Chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should keep track of the current round', function () {
        const game = new Game();
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
    
    it('should start the game', function() {
        const game = new Game();
        expect(game.start).to.be.a('function');
    });
    
    it.skip('should have cards', function() {
        const game = new Game();
        
        game.start();
        
        expect(cards).to.exist;
        expect(cards).to.be.an.instanceOf(Card);
    });

    it.skip('should keep the cards in a deck', function() {
        const game = new Game();

        game.start();

        expect(deck).to.exist;
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it.skip('should be able to start a new round', function() {
        const game = new Game();

        game.start();

        expect(round).to.exist;
        expect(round).to.be.an.instanceOf(Round);
    });

    it.skip('should be able to invoke printMessage', function() {
        const game = new Game();
        expect(game.printMessage()).to.exist;
    });

    it.skip('should be able to invoke printQuestion', function() {
        const game = new Game();
        expect(game.printQuestion()).to.exist;
    });
})