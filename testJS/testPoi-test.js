
describe("Test 1", function() {

	var bombonera;
	var comisaria24;
	var obelisco;
	var poi;
	var coordenadaBanco1;

	beforeEach(function() {
		bombonera = new Point(-34.63565, -58.36465);
		comisaria24 = new Point(-34.6342281,-58.3603267);
		obelisco = new Point(-34.603739,-58.38157);
		poi = new Poi("Arnaldo",new Point(-34.546562, -58.556038),25,0.5);
		coordenadaBanco1 = new Point(-34.548688, -98.552837);
	});

	

	it("test 1", function() {
		expect(poi.nombre).toEqual("Arnaldo");
	});
	it("test 2", function() {
		console.log(poi.coordenada.distance(coordenadaBanco1));
		console.log( poi.distanciaMinCercania);
		expect(poi.estaCercaDe(coordenadaBanco1)).toEqual(false);

	});

});