function Poi(nombre,coordenada,horario,horario2,distanciaMinCercania){
	this.nombre= nombre;
	this.coordenada=coordenada;
	this.horarioap=horario;
	this.horariocie=horario2;
	this.distanciaMinCercania=distanciaMinCercania;
	self = this;

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
