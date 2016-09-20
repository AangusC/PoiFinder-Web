
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
		var poi = new Poi("Arnaldo",new Point(-34.546562, -58.556038),12,20,0.5);
		userPapa.agregarFavoritos(poi)
		expect(userPapa.getFavoritos().length).toBe(1);
	});
	it("es Favorito", function() {
		var poi = new Poi("Arnaldo",new Point(-34.546562, -58.556038),12,20,0.5);
		userPapa.agregarFavoritos(poi)
		expect(userPapa.esFavorito(poi)).toEqual(true);
	});
	it("no es Favorito", function() {
		var poi = new Poi("Arnaldo",new Point(-34.546562, -58.556038),12,20,0.5);
		var poi2 = new Poi("Chungo",new Point(-34.546562, -58.556038),12,20,0.5);
		userPapa.agregarFavoritos(poi)
		expect(userPapa.esFavorito(poi2)).toEqual(false);
	});

});