function Usuario(nombre,password){
	this.nombre= nombre;
	this.password=password;

    this.esPasswordValida= function (pass) {
        return  this.password == pass;
    };

    // FAVORITOS

	/*var favoritos = ["Galicia",
					"Santander",
					78,
					"Lo de Carlos"];
					*/

	// List for default
	/*
	var favoritos	= [	 new Poi("Arnaldo",new Point(-34.546562, -58.556038),12,20,0.5)];

	// add new Poi
	this.agregarFavoritos = function(Poi) {
		favoritos.push("Poi");
	};

	this.esFavorito = function(Poi) {
		favoritos.contains(Poi);
	};

	this.getFavoritos = function() {
		return favoritos
	}

	*/

}