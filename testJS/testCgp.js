
describe("Test Cgp", function() {

	var cgp;
	var comuna	

	beforeEach(function() {
		comuna = new Comuna(1,[new Point(-34.508278, -58.479405),new Point(-34.516642, -58.475876),new Point(-34.517631, -58.488267)])
		cgp = new Cgp(comuna);
	});

	it("dentro de la comuna", function() {			
		console.log(comuna.area)
		expect(cgp.estaCercaDe(new Point(-34.513427, -58.479704))).toEqual(true);
	});
	it("fuera de la comuna", function() {		
	
		expect(cgp.estaCercaDe(new Point(-34.5427, -58.479704))).toEqual(false);
	});
});