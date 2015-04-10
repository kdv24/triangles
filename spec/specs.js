describe("triangleChecker", function(){
    it("will return 'not a triangle' if user enters '3, 4, 9'", function(){
        expect(triangleChecker(3, 4, 9)).to.equal('not a triangle');
    });
});
