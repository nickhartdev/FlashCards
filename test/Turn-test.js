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

    // it.skip('should be able to return an answer', function() {
    //     const card = new Card(1, 'What is Nick\'s cat\'s name?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    //     const turn = new Turn('Hobbes', card);

    //     expect(turn.answer).to.deep.equal(card.answers[2]);
    // });
});