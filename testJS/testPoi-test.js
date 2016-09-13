
describe("Test 1", function() {

	var bombonera;
	var comisaria24;
	var obelisco;
	var poi;

	beforeEach(function() {
		bombonera = new Point(-34.63565, -58.36465);
		comisaria24 = new Point(-34.6342281,-58.3603267);
		obelisco = new Point(-34.603739,-58.38157);
		poi = new Poi("Arnaldo",obelisco,25,2);
	});

	

	it("test 1", function() {
		expect(poi.nombre).toEqual("Arnaldo");
	});

});