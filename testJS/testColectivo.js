
describe("Test Colectivo", function() {

	var colectivo;	

	beforeEach(function() {
		colectivo = new Colectivo(78,[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]);
	});

	it("distancia cercana", function() {		
	
		expect(colectivo.estaCercaDe(new Point(-34.548438, -58.552687))).toEqual(true);
	});
});