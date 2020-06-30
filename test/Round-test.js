const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

    const card1 = new Card(1, 'What is the name of Nick\'s cat?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    const card2 = new Card(2, 'Where is Ili originally from?', ['Denver', 'San Antonio', 'Austin'], 'San Antonio');
    const card3 = new Card(3, 'Which drum corps did Nick march with?', ['Blue Devils', 'Blue Stars', 'Blue Knights'], 'Blue Knights');;
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    afterEach(function() {
        round.turns = 0;
        deck.cards = [card1, card2, card3];
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should be able to return the current card in play', function() {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should instantiate a new turn every time a guess is made', function() {
        expect(round.takeTurn('Hobbes')).to.equal('correct!');
    })

    it('should update the turn count every time a correct guess is made', function() {
        expect(round.turns).to.equal(0);
        round.takeTurn('Hobbes');
        expect(round.turns).to.equal(1);
    });

    it('should update the turn count every time an incorrect guess is made', function() {
        expect(round.turns).to.equal(0);
        round.takeTurn('Toby');
        expect(round.turns).to.equal(1);
    });

    it('should move to the next card after a correct guess is made', function() {
        expect(round.returnCurrentCard()).to.equal(card1);
        round.takeTurn('Hobbes');
        expect(round.returnCurrentCard()).to.equal(card2);
    });

    it('should move to the next card after an incorrect guess is made', function() {
        expect(round.returnCurrentCard()).to.equal(card1);
        round.takeTurn('Ollie');
        expect(round.returnCurrentCard()).to.equal(card2);
    });

    it('should have a way of keeping track of incorrect guesses', function() {
        expect(round.incorrectGuesses).to.exist;
    });

    it.skip('should update the number of incorrect guesses when you guess wrong', function() {
        expect(round.incorrectGuesses).to.deep.equal([]);
        round.takeTurn('Toby');
        expect(round.incorrectGuesses).to.deep.equal(['Toby']);
    });

    it('should let you know when you get a question right', function() {
        expect(round.takeTurn('Hobbes')).to.equal('correct!');
    });

    it('should let you know when you get a question wrong', function() {
        expect(round.takeTurn('Ollie')).to.equal('incorrect!');
    });

    it.skip('should return a percentage of how many guesses you got right', function () {
        round.takeTurn('Hobbes');
        round.takeTurn('San Antonio');
        round.takeTurn('Blue Devils');

        expect(round.calculatePercentCorrect).to.equal(66);
    });

    it.skip('should return a percentage of how many guesses you got right with a different set of answers', function () {
        round.takeTurn('Toby');
        round.takeTurn('San Antonio');
        round.takeTurn('Blue Stars');

        expect(round.calculatePercentCorrect).to.equal(33);
    });
});
