var multiply = require('../src/multiply.js');

describe("Multiply",function(){
	it("should multiply two digits",function(){
		expect(multiply(2,6)).toEqual(12);
	});
	it("should handle multiple arguments.", function(){
		expect(multiply(1,2,3,4)).toEqual(24);
	});
});
