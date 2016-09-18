function RepoUsuarios(){

    var usuarios = [
        new Usuario("pp", "pp"),
		new Usuario("papa", "papa")
    ];

    this.getUsuario= function (nombre) {
        var user;
        var len = usuarios.length;
        for (i = 0; i < len; i++) {
            if (usuarios[i].nombre == nombre){
                user =usuarios[i];
                break;
            }
        }
        return  user;
    }
};