
'use strict';
var poiApp = angular.module('poiApp', []);

poiApp.controller('loginCtrl', function() {
    var self=this;
    self.user="";
    self.pass="";
    
    self.repoUsuarios = new RepoUsuarios();    
        
    self.validarUser= function(loginForm){
        
         try {
            self.usuario = self.repoUsuarios.getUsuario(self.user);
        
            if (self.usuario.esPasswordValida(self.pass)) {
                window.location = "busquedaWindows.html";
            }     
         }catch (exception) {
            loginForm.$invalid = true;
            this.errorMessage = exception;
        }
         
        
    };
    
   
});
