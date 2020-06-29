const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should contain cards', function() {
        const card1 = new Card();
        const card2 = new Card();
        const card3 = new Card();
        const deck = new Deck([card1, card2, card3]);

        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to say how many cards it has', function() {
        const card1 = new Card();
        const card2 = new Card();
        const card3 = new Card();
        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards).to.equal(3);
    }) 
});