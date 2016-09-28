
'use strict';
var poiApp = angular.module('poiApp', []);

poiApp.controller('loginCtrl', function() {
    var self=this;
    self.user="";
    self.pass="";
    
    self.repoUsuarios = new RepoUsuarios();    
        
    self.validarNombre= function(){
        self.usuario = self.repoUsuarios.getUsuario(self.user);
        //if (usuario != undefined) {
            if (self.usuario.esPasswordValida(self.pass)) {
                window.location = "busquedaWindows.html";
            } 
        //}
    };
    
   
});
