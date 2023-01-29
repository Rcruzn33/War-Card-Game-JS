var expect = chai.expect;

describe('Player', function() {
    var player;
    beforeEach(function() {
        player = new Player('John');
    });

    it('should have a name', function() {
        expect(player.name).to.equal('John');
    });

    it('should have a score of 0', function() {
        expect(player.score).to.equal(0);
    });
});

