poiApp.service("RepoUsuarios",function($http){
    var self = this;
    
    this.findAll = function(callback){
        $http.get('/usuarios').then(callback);
    }


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

