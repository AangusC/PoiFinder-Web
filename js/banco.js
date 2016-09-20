Banco.extends(Poi);


function Banco() {

	this.servicios = [];
	this.diasAtencion = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

	// add new Servicio
	this.agregarServicio = function (Servicio) {
		this.servicios.push(Servicio);
	};

	this.adddia = function (dia) {
		this.diasAtencion.push(dia);
	};

	Banco.prototype.estaAbierto = function (nombre, dia, hora, minuto) {
		(horarios.checkHora(hora, minuto) && diasAtencion.some(dia))
		//return this.servicios.some(service => service.existeNombreIgual(nombre) && service.validarFecha(dia, hora, minuto))
	};