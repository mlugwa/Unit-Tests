describe("Add", function(){
	it("should add two numbers.",function(){
		expect(add(0,0)).toEqual(0);
	});
	it("should be able to handle negetive numbers.",function(){
		expect(add(-1,-1)).toEqual(-2);
	});
	it("should be able to handle adding multiple arguments.",function(){
		expect(add(1,2,3,4)).toEqual(10);
	});
	it("should add two positive numbers.",function(){
		expect(add(1,5)).toEqual(6);
	});
});
