describe("Test Banco", function() {

	var banco;

	beforeEach(function() {

		banco = new Banco({nombre:"galicia"});
	});


	
	it("esta abierto", function() {	
		expect(banco.estaAbierto("lunes" , 11, 05)).toEqual(true);
	});
	

});