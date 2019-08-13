describe("Add", function(){
	it("should return 0 when adding 0 + 0.",function(){
		expect(add(0,0)).toEqual(0);
	});
	it("should return -2 when adding -1 + -1",function(){
		expect(add(-1,-1)).toEqual(-2);
	});
	it("should return 9 when adding 4 + 5",function(){
		expect(add(4,5)).toEqual(9);
	});
	it("should return 10 when adding 1 + 2 + 3 + 4.",function(){
		expect(add(1,2,3,4)).toEqual(10);
	});
});
