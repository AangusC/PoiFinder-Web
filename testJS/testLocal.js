
describe("Test Local", function() {

	var local;
	

	beforeEach(function() {
		local1 = new Local({nombre:"Lo de tere",claves:["pastas","carnes"],categoria:"restorant" });
		local2 = new Local({nombre:"gym",claves:["pastas","carnes"],categoria:"restorant" });
		local3 = new Local({nombre:"carniceria",claves:["pastas","carnes"],categoria:"restorant" });
	});

	it("local1 encontrado, Machear por nombre", function() {	
		expect(local1.matcherXNombre("Lo de tere")).toEqual(true);
	});

	it("local1 NO encontrado, Machear por nombre", function() {	
		expect(local1.matcherXNombre("Raul")).toEqual(false);
	});

	it("local2 encontrado, Machear por nombre", function() {	
		expect(local2.matcherXNombre("g")).toEqual(true);
	});

	it("local3 encontrado, Machear por nombre", function() {	
		expect(local3.matcherXNombre("carn")).toEqual(true);
	});

	/* [new Point(-34.508278, -58.479405)]
	it ("colectivo1 distancia cercana a 0.5 metros", function() {		
		expect(local.estaCercaDe(new Point(-34.508278, -58.479405))).toEqual(true);
	});
	*/
	

});