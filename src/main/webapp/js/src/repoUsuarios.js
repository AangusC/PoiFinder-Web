poiApp.service("RepoUsuarios",function($http){
    var self = this;
    
    this.findAll = function(callback){
        $http.get('/usuarios').then(function(response) {
            self.usuarios= response.data;
        }).then(callback);
    }


    self.getUsuario= function(username) {
        var user;
        var len = self.usuarios.length;
        
        for (i = 0; i < len; i++) {
            if (self.usuarios[i].username == username){
                user = self.usuarios[i];
                break;
            }
        }
        
        if(user != undefined) {
            var usuario = new Usuario(user.nombre, user.password);
            usuario.favoritos = user.favoritos;
            return  usuario;    
        }else{
             throw "El usuario ingresado no existe.";
        }
        
    };
});

