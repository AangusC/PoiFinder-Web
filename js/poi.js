function Poi(nombre,coordenada,horario,distanciaMinCercania){
	this.nombre= nombre;
	this.coordenada=coordenada;
	this.horario=horario;
	this.distanciaMinCercania=distanciaMinCercania;
}


function estaCercaDe(point) {
	var self = this;
		return  self.coordenada.distance(point) <= self.distanciaMinCercania;
	}

function estaAbierto(nombre,dia,hora,minuto) {
		(horarios.checkHora(hora, minuto));
	}
/*new Poi({nombre: "blah", coordenada: 2})

function Poi(opts){
	this.nombre= opts.nombre || "";
	this.coordenada=opts.coordenada;
}*/
