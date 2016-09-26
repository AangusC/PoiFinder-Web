var Cgp = Poi.extend(function (op) {
	this.comuna=op.comuna;
	this.servicios = op.servicio;
})
  .methods({
	estaCercaDe: function (point) {
		return this.comuna.validarPosicion(point);
	},

	estaAbierto : function (dia, hora, minuto) {
		return this.servicios.some(service => service.validarFecha(dia, hora, minuto));
	},
	/*estaAbierto : function (nombre,dia, hora, minuto) {
		if(this.estaServicio)
			return this.servicios.some(service => service.validarFecha(dia, hora, minuto));
		else return false;
	},*/

	matcherXNombre : function (nombre) {
		return this.direccion.toLowerCase.includes(nombre.toLowerCase)||barrio.toLowerCase.includes(nombre.toLowerCase);
	},

	agregarServicio : function(Servicio) {
		this.servicios.push(Servicio);
	},

	estaServicio : function (nombre) {
		return this.servicios.some(servicio => servicio.nombre == nombre)
	},
	getServicios : function() {
		return this.servicios;
	}

  });





function Comuna(nombre,area) {
	this.nombre= nombre;
	this.area= new Polygon(area);

	this.validarPosicion=function(point) {
		return this.area.isInside(point)
	}
};


function Servicio(opts) {
	this.nombre=opts.nombre;
	this.horarios= opts.horarios || new Horario(0,0,0,0);	
	this.diasAtencion=opts.diasAtencion || ["lunes","martes","miercoles","jueves","viernes"];

	this.existeNombreIgual = function (texto) {
		return this.nombre.matches(texto)
	}

	this.validarFecha  = function (dia, hora, minuto) {
		return (this.horarios.checkHora(hora, minuto) && this.diasAtencion.includes(dia))
	}
};