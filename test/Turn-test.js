const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it.skip('should include an answer', function() {
        const turn = new Turn('Answer');    
        expect(turn.answer).to.equal('Answer');
    });

    it.skip('should include an instance of Card', function() {
        const card = new Card();
        const turn = new Turn('Answer', card);

        expect(turn.card).to.equal(card);
    });

    it.skip('should be able to return a guess', function() {
        const card = new Card();
        const turn = new Turn('Answer', card);

        expect(turn.returnGuess()).to.equal('Answer');
    })
});