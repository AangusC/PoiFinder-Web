
describe("Test Cgp", function() {

	var cgp;
	var comuna;	
	
	beforeEach(function() {

		comuna = new Comuna(1,[new Point(-34.508278, -58.479405),new Point(-34.516642, -58.475876),new Point(-34.517631, -58.488267)])

		cgp = new Cgp({comuna:comuna,servicio:[]});

		var servicio1 = new Servicio({nombre:"Rentas",horarios: new Horario(12,0,20,0),diasAtencion:["lunes"]});
		var servicio2 = new Servicio({nombre:"Registro Civil", horarios:new Horario(14,0,21,0)});
		var servicio3 = new Servicio({nombre:"Defensa del Consumidor", horarios:new Horario(8,0,12,0)});
		var servicio4 = new Servicio({nombre:"Participación Ciudadana",horarios: new Horario(12,0,20,0)});


		cgp.agregarServicio(servicio1);
		cgp.agregarServicio(servicio2);
		cgp.agregarServicio(servicio3);
		cgp.agregarServicio(servicio4);
	
	});

	it("dentro de la comuna", function() {	

		expect(cgp.estaCercaDe(new Point(-34.513427, -58.479704))).toEqual(true);
	});

	it("fuera de la comuna", function() {		
		expect(cgp.estaCercaDe(new Point(-34.5427, -58.479704))).toEqual(false);
	});

	it("esta Servicio", function() {	
		expect(cgp.estaServicio("Participación Ciudadana")).toEqual(true);
	});

	it("NO esta Servicio", function() {	
		expect(cgp.estaServicio("Mediación Comunitar")).toEqual(false);
	});

	it("servicio abierto", function() {
	
		expect(cgp.estaAbierto("lunes",13,20)).toBe(true);
	});
	it("servicio no abierto", function() {
		expect(cgp.estaAbierto("lunes",22,00)).toBe(false);
	});






});