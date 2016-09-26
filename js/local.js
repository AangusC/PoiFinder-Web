var Local = Poi.extend(function (op) {
	this.categoria=op.categoria;
	this.coordenada= op.coordenada  || "";

})
  .methods({
	
	matcherXNombre : function (_nombre) {
		return (this.claves.includes(_nombre) || this.categoria == _nombre || this.nombre.startsWith(_nombre))
	}
  });
