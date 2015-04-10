describe("triangleChecker", function(){
    it("will return 'not a triangle' if user enters digits that can't make a triangle- '3, 4, 9'", function(){
        expect(triangleChecker(3, 4, 9)).to.equal('not a triangle');
    });
    it ("will return 'equilateral' if user enters digits that are all equal- '4, 4, 4'", function() {
        expect(triangleChecker(4, 4, 4)).to.equal('equilateral');
    });
});
