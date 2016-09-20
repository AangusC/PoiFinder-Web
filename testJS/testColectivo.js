
describe("Test Colectivo", function() {

	var colectivo;
	var colectivoA;
	var colectivoB;

	beforeEach(function() {
		colectivo = new Colectivo({nombre:78,paradas:[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]});
		colectivoA = new Colectivo({nombre:21,paradas:[new Point(-38.548845, -58.553234)]});
		colectivoB = new Colectivo({nombre:258,paradas:[new Point(-38.548845, -55.553234)]});

	});

	it ("distancia cercana", function() {		
		expect(colectivo.estaCercaDe(new Point(-34.548438, -58.552687))).toEqual(true);
	});

	it ("distancia lejana a 0.5", function() {		
		expect(colectivoA.estaCercaDe(new Point(-38.548845, -55.552687))).toEqual(false);
	});	

	/*it ("test distancia console", function() {	
	console.log(colectivoA.distancia(new Point(-38.548845, -55.552687)));
	});*/
	

});