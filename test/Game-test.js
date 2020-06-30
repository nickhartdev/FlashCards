const chai = require('Chai');
const expect = chai.expect;

const game = require('../src/Game');

describe('Game', function() {

    const game = new Game();

    it.skip('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it.skip('should be an instance of Game', function() {
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should keep track of the current round', function() {

    });

    it('should start the game', function() {

    });

    it('should have cards', function() {

    });

    it('should keep the cards in a deck', function() {

    });

    it('should be able to start a new round', function() {

    });

    it('should invoke printMessage', function() {

    });

    it('should invoke printQuestion', function() {

    });
})