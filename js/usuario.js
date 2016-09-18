function Usuario(nombre,password){
	this.nombre= nombre;
	this.password=password;

    this.esPasswordValida= function (pass) {
        return  this.password == pass;
    }
};