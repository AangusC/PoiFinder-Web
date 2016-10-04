poiApp.service("RepoUsuarios",function(){
    var self = this;
    
    self.usuarios = [
        new Usuario("pp", "pp"),
		new Usuario("papa", "papa")
    ];

    self.getUsuario= function(nombre) {
        var user;
        var len = self.usuarios.length;
        
        for (i = 0; i < len; i++) {
            if (self.usuarios[i].nombre == nombre){
                user = self.usuarios[i];
                break;
            }
        }
        
        if(user != undefined) {
            return  user;    
        }else{
             throw "El usuario ingresado no existe.";
        }
        
    };
});

