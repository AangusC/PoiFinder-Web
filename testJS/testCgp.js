
describe("Test Cgp", function() {

	var cgp;
	var comuna	

	beforeEach(function() {

		comuna = new Comuna(1,[new Point(-34.508278, -58.479405),new Point(-34.516642, -58.475876),new Point(-34.517631, -58.488267)])

		cgp = new Cgp({comuna:comuna,servicio:[]});

		var servicio1 = new Servicio({nombre:"Rentas",horaApertura:12,horaCierre:20 });
		var servicio2 = new Servicio({nombre:"Registro Civil",horaApertura:14, horaCierre:21 });
		var servicio3 = new Servicio({nombre:"Defensa del Consumidor",horaApertura:08 , horaCierre:12 });
		var servicio4 = new Servicio({nombre:"Participación Ciudadana",horaApertura:12,horaCierre:20 });
		var servicio5 = new Servicio({nombre:"Servicio Social Zonal",horaApertura:14, horaCierre:21 });
		var servicio6 = new Servicio({nombre:"Oficina de Intermediacion Laboral",horaApertura:08 , horaCierre:12 });
		var servicio7 = new Servicio({nombre:"Casamientos",horaApertura:08 , horaCierre:12 });
		var servicio8 = new Servicio({nombre:"Mediación Comunitaria",horaApertura:08 , horaCierre:12 });
		var servicio9 = new Servicio({nombre:"Plan de Prevención del Delito",horaApertura:08 , horaCierre:12 });
		var servicio10 = new Servicio({nombre:"Defensoría del Niño, Niña y Adolescente",horaApertura:08 , horaCierre:12 });

		cgp.agregarServicio(servicio1);
		cgp.agregarServicio(servicio2);
		cgp.agregarServicio(servicio3);
		cgp.agregarServicio(servicio4);
		cgp.agregarServicio(servicio5);
		cgp.agregarServicio(servicio6);
		cgp.agregarServicio(servicio7);
		cgp.agregarServicio(servicio8);
		cgp.agregarServicio(servicio9);
		cgp.agregarServicio(servicio10);

	});

	it("dentro de la comuna", function() {			
		console.log(comuna.area)
		expect(cgp.estaCercaDe(new Point(-34.513427, -58.479704))).toEqual(true);
	});

	it("fuera de la comuna", function() {		
		expect(cgp.estaCercaDe(new Point(-34.5427, -58.479704))).toEqual(false);
	});

	it("esta Servicio", function() {	
		expect(cgp.estaServicio("Mediación Comunitaria")).toEqual(true);
	});

	it("NO esta Servicio", function() {	
		expect(cgp.estaServicio("Mediación Comunitar")).toEqual(false);
	});

	it("Cantidad de Servicios", function() {
		expect(cgp.getServicios().length).toBe(10);
	});





});