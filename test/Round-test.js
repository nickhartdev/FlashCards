const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
    beforeEach(function() {
        const card1 = new Card();
        const card2 = new Card();
        const card3 = new Card();
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
    });

    it.skip('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it.skip('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf('Round');
    });

    it.skip('should be able to return the current card in play', function() {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it.skip('should make a new turn instance every time a guess is made', function() {

    });

    it.skip('should update the turn count every time a guess is made', function() {

    });

    it.skip('should move to the next card after a guess is made', function() {

    });

    it.skip('should have a way of keeping track of incorrect guesses', function() {

    });

    it.skip('should update the number of incorrect guesses when you guess wrong', function() {

    });

    it.skip('should let you know when you get a question right', function() {

    });

    it.skip('should let you know when you get a question wrong', function() {

    });

    it.skip('should return a percentage of how many guesses you got right', function() {

    });
});
