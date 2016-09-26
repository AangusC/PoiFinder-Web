
describe("Test Colectivo", function() {

	var colectivo;
	var colectivoA;
	var colectivoB;

	beforeEach(function() {
		colectivo1 = new Colectivo({nombre:78,paradas:[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]});
		colectivo2 = new Colectivo({nombre:21,paradas:[new Point(-38.548845, -58.553234)]});
		colectivo3 = new Colectivo({nombre:258,paradas:[new Point(-38.548845, -55.553234)]});

	});

	it ("colectivo1 distancia cercana a 0.5 metros", function() {		
		expect(colectivo1.estaCercaDe(new Point(-34.548438, -58.552687))).toEqual(true);
	});

	it ("colectivo1 distancia lejana a 0.5 metros", function() {		
		expect(colectivo1.estaCercaDe(new Point(-38.548845, -55.553234))).toEqual(false);
	});

	it ("colectivo1 distancia lejana a 0.5 metros", function() {		
		expect(colectivo1.estaCercaDe(new Point(-38.548845, -55.553234))).toEqual(false);
	});

	it ("colectivo2 distancia cercana a 0.5 metros", function() {		
		expect(colectivo2.estaCercaDe(new Point(-38.548845, -58.553234))).toEqual(true);
	});

	it ("colectivo2 distancia lejana a 0.5 metros", function() {		
		expect(colectivo2.estaCercaDe(new Point(-38.548845, -55.552687))).toEqual(false);
	});	

	it ("colectivo3 distancia cercana a 0.5 metros", function() {		
		expect(colectivo3.estaCercaDe(new Point(-38.548845, -55.553234))).toEqual(true);
	});

	/*
	it ("test distancia console", function() {	
	console.log(colectivo1.distancia(new Point(-38.548845, -55.552687)));
	});
	*/
	

});