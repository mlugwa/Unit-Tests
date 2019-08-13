describe("Multiply",function(){
	it("should return the multiple of two digits",function(){
		expect(multiply(2,6)).toEqual(12);
	});
	it("should return 24 when multiplying 1 * 2 * 3 * 4.", function(){
		expect(multiply(1,2,3,4)).toEqual(24);
	});
});
