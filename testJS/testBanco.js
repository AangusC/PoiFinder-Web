describe("Test Banco", function() {

	var banco;

	beforeEach(function() {
		banco = new Banco({nombre:"galicia"});
	});

	it("esta abierto", function() {	
		expect(banco.estaAbierto("lunes" , 11, 00)).toEqual(true);
	});

	it("NO esta abierto, horario no cumple condicion", function() {	
		expect(banco.estaAbierto("lunes" , 19, 05)).toEqual(false);
	});

	it("NO esta abierto, dia no cumple condicion", function() {	
		expect(banco.estaAbierto("Sabado" , 11, 47)).toEqual(false);
	});

	it("NO esta abierto, dia y horario no cumple condicion", function() {	
		expect(banco.estaAbierto("Sabado" , 18, 47)).toEqual(false);
	});
	
});