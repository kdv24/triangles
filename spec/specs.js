describe("triangleChecker", function(){
    it("will return 'not a' if user enters digits that can't make a triangle- '3, 4, 9'", function(){
        expect(triangleChecker(3, 4, 9)).to.equal('not a');
    });
    it ("will return 'an equilateral' if user enters digits that are all equal- '4, 4, 4'", function() {
        expect(triangleChecker(4, 4, 4)).to.equal('an equilateral');
    });
    it("will return 'an isosceles' if user enters 2 digits that are equal and 1 that isn't- '3, 4, 4'", function() {
        expect(triangleChecker(3, 4, 4)).to.equal('an isosceles');
    });
    it("will return 'a scalene' if user enters 3 different digits that form a triangle- '4, 6, 7'", function() {
        expect(triangleChecker(4, 6, 7)).to.equal('a scalene');
    });
});
