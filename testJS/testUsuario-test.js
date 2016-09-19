
describe("Test Usuario", function() {

	var userPP;
	var userPapa;

	beforeEach(function() {
		userPP = new Usuario("pp", "pp");
		userPapa = new Usuario("papa", "papa");

	});

	it("test password correcta", function() {
		expect(userPP.esPasswordValida("pp")).toEqual(true);
	});
	it("test password incorrecta", function() {
		expect(userPapa.esPasswordValida("pp")).toEqual(false);
	});

/*	it('debería tener deuda 0', function() {
      expect(userPP.getFavoritos()).toBe([ 1 ]);
    });
    */

});