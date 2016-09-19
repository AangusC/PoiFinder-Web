
describe("Test Colectivo", function() {

	var colectivo;	

	beforeEach(function() {
		colectivo = new Colectivo(78,[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]);
		colectivoA = new Colectivo(21,[new Point(-38.548845, -58.553234)]);
		colectivoB = new Colectivo(258,[new Point(-38.548845, -55.553234)]);

	});

	it ("distancia cercana", function() {		
		expect(colectivo.estaCercaDe(new Point(-34.548438, -58.552687))).toEqual(true);
	});

	it ("distancia cercana", function() {		
		expect(colectivoA.estaCercaDe(new Point(-38.548844, -58.552687))).toEqual(true);
	});

	it ("distancia lejana a 0.5", function() {		
		expect(colectivoA.estaCercaDe(new Point(-38.548845, -55.552687))).toEqual(false);
	});

	it ("distancia cercana", function() {		
		expect(colectivoB.estaCercaDe(new Point(-38.548845, -55.553234))).toEqual(true);
	});



});