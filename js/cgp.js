Cgp.extends(Poi);


function Cgp(comuna) {
	this.comuna=comuna;

	Cgp.prototype.estaCercaDe = function (point) {
      return this.comuna.validarPosicion(point);
    }


	/*this.estaCercaDe= function (point) {
      return this.comuna.validarPosicion(point);
    }*/

};

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
}
