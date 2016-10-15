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
		return (indiceFavorito(poi) > -1)
	};

	this.getFavoritos = function() {
		return favoritos
	}

	// deleted Poi
	this.eliminarFavoritos = function(poi) {
		var indice = indiceFavorito(poi);
		if (indice > -1) {
			favoritos.splice(indice, 1);
		}
	};

	function indiceFavorito(poi) {
		var indice = -1;
		var len = favoritos.length;
		for (i = 0; i < len ; i++) {
			if (favoritos[i].nombre == poi.nombre) {
				indice = i;
				break;
			}
		}
		return indice;
	};


}