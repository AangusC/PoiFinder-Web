function Poi(myJson){
	this.nombre = myJson.nombre || "";
	this.coordenada = myJson.coordenada || "";
	this.horarioap = myJson.horario || "";
	this.horariocie = myJson.horario2 || "";
	this.distanciaMinCercania = myJson.distanciaMinCercania || 0.1;
	this.direccion = myJson.direccion || "";
	self = this;

	this.opiniones = [];

	this.guardarOpinion = function(texto, user, puntaje) {
		//opiniones.removeIf([o|o.user == user])
		var op = new Opinion(texto, user, puntaje)
		this.opiniones.push(op)
	}

	this.getPoints = function() {
		var pun =0;
		var len = this.opiniones.length;
		if (len > 0 ) {
			for (i = 0; i < len ; i++) {
				pun = pun + this.opiniones[i].score
			}
			pun = pun / len;
		}
        return pun;
	}

};



Poi.prototype.estaCercaDe= function (point) {
		return  self.coordenada.distance(point) <= self.distanciaMinCercania;
	};

Poi.prototype.estaAbierto= function(hora) {

		return (hora >= self.horarioap)&&(hora<=self.horariocie);
		//return	(self.checkHora(hora));
	
};

/*function checkHora(hora){
	var self = this;
	return if(hora>=self.horarioap&&hora<=self.horariocie);
}
new Poi({nombre: "blah", coordenada: 2})

function Poi(opts){
	this.nombre= opts.nombre || "";
	this.coordenada=opts.coordenada;
}*/
