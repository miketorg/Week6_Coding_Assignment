
var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#dealToPlayers', function() {
        it('should be 52', function() {
            var x = dealToPlayers(this.cards.length);
            expect(x).to.equal(52)
        });
       
        it('should throw an error if not 52', function() {
            expect(function() {
                dealToPlayers(this.cards.length);
            }).to.throw(Error);
        });
    });
});    