
describe("Test Local", function() {

	var local;
	var coordenada2;
	var coordenada1;

	beforeEach(function() {
		local1 = new Local({nombre:"Lo de tere",claves:["pastas","carnes"],categoria:"restorante" ,coordenada:new Point(-34.553384, -58.557325),distanciaMinCercania:0.2});
		coordenada2 = new Point(-34.552474, -58.556467);
		coordenada1 = new Point(-34.548688, -98.552837);
	});

	it("local1 encontrado, Machear por nombre", function() {	
		expect(local1.matcherXNombre("Lo de tere")).toEqual(true);
	});

	it("local1 NO encontrado, Machear por nombre", function() {	
		expect(local1.matcherXNombre("Raul")).toEqual(false);
	});

	it("local2 encontrado, Machear por categoria", function() {	
		expect(local1.matcherXNombre("restorante")).toEqual(true);
	});
	it("local2 encontrado, Machear por claves", function() {	
		expect(local1.matcherXNombre("pastas")).toEqual(true);
	});

	it("test distancia verdadera", function() {
		expect(local1.estaCercaDe(coordenada2)).toEqual(true);
	});
	it("test distancia falsa", function() {
		expect(local1.estaCercaDe(coordenada1)).toEqual(false);

	});


});