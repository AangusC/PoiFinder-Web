var Local = Poi.extend(function (op) {
	this.categoria=op.categoria;
})
  .methods({
	
	matcherXNombre : function (_nombre) {
		this.claves.contains(_nombre)|| this.categoria == _nombre || this.nombre.startsWith(_nombre)
	}
  });
