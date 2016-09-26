
describe("Test Usuario", function() {

	var userPP;
	var userPapa;
	var obelisco;


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

	it("agregar Favoritos", function() {
		var poi = new Poi({nombre:"Arnaldo",coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00),distanciMinCercania:0.5});
		userPapa.agregarFavoritos(poi);
		expect(userPapa.getFavoritos().length).toBe(1);
	});

	it("Eliminar favoritos", function() {
		var poi1 = new Poi({nombre:"Arnaldo",coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00)});
		var poi2 = new Poi({nombre:"CGP",coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00)});
		var poi3 = new Poi({nombre:"Verduleria Raul",coordenadas:new Point(-34.546562, -58.556038),horarios: new Horario(12,00,16,00)});
		var poi4 = new Poi({nombre:78,coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00)});
		userPapa.agregarFavoritos(poi1);
		userPapa.agregarFavoritos(poi2);
		userPapa.agregarFavoritos(poi3);
		userPapa.agregarFavoritos(poi4);
		expect(userPapa.getFavoritos().length).toBe(4);
		userPapa.eliminarFavoritos(poi1);
		expect(userPapa.getFavoritos().length).toBe(3);
		expect(userPapa.esFavorito(poi1)).toEqual(false);
		expect(userPapa.esFavorito(poi2)).toEqual(true);
		userPapa.eliminarFavoritos(poi3);
		userPapa.eliminarFavoritos(poi2);
		expect(userPapa.getFavoritos().length).toBe(1);
	});

	it("es Favorito", function() {
		var poi = new Poi({nombre:"Arnaldo",coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00)});
		userPapa.agregarFavoritos(poi);
		expect(userPapa.esFavorito(poi)).toEqual(true);
	});

	it("no es Favorito", function() {
		var local1 = new Poi({nombre:"Arnaldo",coordenadas:new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00)});
		var colectivo = new Poi({nombre:78,paradas:[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]});
		userPapa.agregarFavoritos(local1);
		expect(userPapa.esFavorito(colectivo)).toEqual(false);
	});

});