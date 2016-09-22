var Banco = Poi.extends(function(nombre){
	this.nombre = nombre;
	this.servicios = [];
	this.diasAtencion = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
	this.horarios = [10, 00, 15, 00];
})




//function Banco() {

.methods({

	// add new Servicio
	this.agregarServicio = function (Servicio) {
		this.servicios.push(Servicio);
	};

	this.adddia = function (dia) {
		this.diasAtencion.push(dia);
	};

	Banco.prototype.estaAbierto = function (nombre, dia, hora, minuto) {
		(horarios.checkHora(hora, minuto) && diasAtencion.some(dia));
		
	};




});
