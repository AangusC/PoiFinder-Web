
describe("Test Poi", function() {

	var bombonera;
	var comisaria24;
	var obelisco;
	var poi;
	var coordenadaBanco1;
	var coordenadaBanco2;

	beforeEach(function() {
		bombonera = new Point(-34.63565, -58.36465);
		comisaria24 = new Point(-34.6342281,-58.3603267);
		obelisco = new Point(-34.603739,-58.38157);
		//poi = new Poi("Arnaldo",new Point(-34.546562, -58.556038),12,20,0.5);
		poi =new Poi({nombre: "Analdo", coordenada: new Point(-34.546562, -58.556038),horario:12,horario2:20,distanciaMinCercania:0.5});
		coordenadaBanco1 = new Point(-34.548688, -98.552837);
		coordenadaBanco2 = new Point(-34.548688, -58.552837);
	});

	

	it("test distancia verdadera", function() {
		expect(poi.estaCercaDe(coordenadaBanco2)).toEqual(true);
	});
	it("test distancia falsa", function() {
		//console.log(poi.coordenada.distance(coordenadaBanco1));
		//console.log( poi.distanciaMinCercania);
		expect(poi.estaCercaDe(coordenadaBanco1)).toEqual(false);

	});
	it("test estaAbierto", function() {
		expect(poi.estaAbierto(13)).toEqual(true);
	});
	it("test estaCerrado", function() {
		expect(poi.estaAbierto(21)).toEqual(false);
	});

	it("sin opiniones", function() {
		expect(poi.opiniones.length).toBe(0);
	});

	it("guardar Opinion", function() {
		poi.guardarOpinion('me gusta', 'yo', 3)
		expect(poi.opiniones.length).toBe(1);
	});

	it("getPoints sin opiniones", function() {
		expect(poi.getPoints()).toBe(0);
	});

	it("getPoints con 1 opinion", function() {
		poi.guardarOpinion('me gusta', 'yo', 3)
		expect(poi.getPoints()).toBe(3);
	});
		it("getPoints con 1 opinion", function() {
		poi.guardarOpinion('me gusta maso', 'el', 1)
		poi.guardarOpinion('me gusta', 'yo', 3)
		expect(poi.getPoints()).toBe(2);
	});

});