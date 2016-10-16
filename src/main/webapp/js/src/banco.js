var Banco = Poi.extend(function(op){
	this.servicios = op.servicios || "nada";	
	this.horarios = new Horario (10,0,15,0);
	this.distanciaMinCercania=0.5;
})
.methods({
	agregarServicio : function (Servicio) {
		this.servicios.push(Servicio);
	},
	getServicios : function() {
		return this.servicios;
	}
});
