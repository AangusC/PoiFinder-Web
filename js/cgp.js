var Cgp = Poi.extend(function (comuna) {
	this.comuna=comuna;
	this.servicios = [];
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
	}
  });

/*function Cgp(comuna) {
	

	Cgp.prototype.estaCercaDe = function (point) {
      return this.comuna.validarPosicion(point);
    };

    // add new Servicio
	this.agregarServicio = function(Servicio) {
		this.servicios.push(Servicio);
	};

	this.numComuna = function() {
		this.comuna.getNombre()
	};

	/*this.estaCercaDe= function (point) {
      return this.comuna.validarPosicion(point);
    }
	Cgp.prototype.estaAbierto = function (nombre, dia, hora, minuto) {
		return this.servicios.some(service => service.existeNombreIgual(nombre) && service.validarFecha(dia, hora, minuto))
	};

	Cgp.prototype.estaAbierto = function (dia, hora, minuto) {
		return this.servicios.some(service => service.validarFecha(dia, hora, minuto))
	};

	Cgp.prototype.estaServicio = function (nombre) {
		return this.servicios.some(servicio => servicio.nombre == nombre)
		//return this.servicios.some(servicio => servicio.nombre.startsWith(nombre))
	};

	Cgp.prototype.estaCercaDe = function (point) {
		return this.estaCerca = this.comuna.validarPosicion(point)
	};

	Cgp.prototype.matcherXNombre = function (nombre) {
		return this.direccion.toLowerCase.contains(nombre.toLowerCase)
			||barrio.toLowerCase.contains(nombre.toLowerCase)
	};


};
*/





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

	this.existeNombreIgual = function (texto) {
		this.nombre.matches(texto)
	}

	this.validarFecha  = function (dia, hora, minuto) {
		(horarios.checkHora(hora, minuto) && diasAtencion.contains(dia))
	}
};
