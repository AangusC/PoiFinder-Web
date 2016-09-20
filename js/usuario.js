function Usuario(nombre,password){
	this.nombre= nombre;
	this.password=password;

    this.esPasswordValida= function (pass) {
        return  this.password == pass;
    };

    // FAVORITOS

	var favoritos = [];
					
	// add new Poi
	this.agregarFavoritos = function(poi) {
		favoritos.push(poi);
	};

	this.esFavorito = function(poi) {
		var existe = false;
		var len = favoritos.length;
		for (i = 0; i < len ; i++) {
			existe = (favoritos[i].nombre == poi.nombre);
		}
		return existe;
	};

	this.getFavoritos = function() {
		return favoritos
	}

	// deleted Poi
	this.eliminarFavoritos = function() {
		favoritos.pop();
	};


}