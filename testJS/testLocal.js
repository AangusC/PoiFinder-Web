
describe("Test Local", function() {

	var local;
	

	beforeEach(function() {
		local= new Local({nombre:"Lo de tere",claves:["pastas","carnes"],categoria:"restorant"});
	});



	it("Machear x nombre ", function() {	
		expect(local.matcherXNombre("Lo de tere")).toEqual(true);
	});	
	

});