var Cgp = Poi.extend(function (op) {
	this.comuna=op.comuna;
	this.servicios = op.servicio;
	me=this
})
  .methods({
	estaCercaDe: function (point) {
		return this.comuna.validarPosicion(point);
	},
	estaAbierto : function (dia, hora, minuto) {
		return this.servicios.some(service => service.validarFecha(dia, hora, minuto));
	},
	matcherXNombre : function (nombre) {
		return this.direccion.toLowerCase.contains(nombre.toLowerCase)
			||barrio.toLowerCase.contains(nombre.toLowerCase);
	},
	agregarServicio : function(Servicio) {
		this.servicios.push(Servicio);
	},
	estaServicio : function (nombre) {
		return this.servicios.some(servicio => servicio.nombre == nombre)
		
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
	this.horaOpen=opts.horaApertura;
	this.horaclose=opts.horaCierre;
	this.diasAtencion=opts.diasAtencion;

	this.existeNombreIgual = function (texto) {
		this.nombre.matches(texto)
	}

	this.validarFecha  = function (dia, hora, minuto) {
		(horarios.checkHora(hora, minuto) && diasAtencion.contains(dia))
	}
};