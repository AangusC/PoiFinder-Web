function Colectivo(nombre,parada) {
	this.nombre= nombre;
	this.paradas=parada;

	//this.paradas=JSON.parse(opts.paradas);
	//this.distanciaMinCercania=0.5;



	/*this.estaCercaDe= function (point) {
      		
      return this.paradas.some(parada => parada.distance(point)<=0.1);
    }*/


};
Colectivo.extends(Poi);

Colectivo.prototype.estaCercaDe = function (point) {
	return this.paradas.some(parada => parada.distance(point) <= 0.1);
};