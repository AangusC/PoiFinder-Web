
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
            }else{
                throw "Password Incorrecto.";
            }    
         }catch (exception) {
            loginForm.$invalid = true;
            this.errorMessage = exception;
        }             
    };       
});



// Es un framework de routing muy complejo y poderoso. Trabaja a través de estados, los cuales determinan la vista a utilizar. Permite trabajar con vistas anidadas y múltiples.

// poiApp.controller('busquedaCtrl', function ('ui.router') {
    
poiApp.controller('busquedaCtrl', function () {
    var self=this;
    self.textoBusqueda = '';  
    self.filtroActual = '';

    self.listaPios = [
        {
            "nombre" : "Galicia",
            "direccion" : "Puerredon",
            "cercania" : "No",
            "favorito" : "★"
        },
        { "nombre" : "CGP 1", "direccion" : "Lavalleja 582", "cercania" : "No", "favorito" : ""},
        { "nombre" : "Santander", "direccion" : "Cochabamba 2219", "cercania" : "No", "favorito" : "★"},
        { "nombre" : "Linea 86", "direccion" : "Calle falsa 123", "cercania" : "Si", "favorito" : "★"}
    ];

    

    self.buscar = function() {
        self.filtroActual = self.textoBusqueda
    };




/*poiApp.controller('BancoController', function () {

    };


poiApp.controller('CgpController', function () {

    };


poiApp.controller('ColectivoController', function () {

    };


 poiApp.controller('LocalController', function () {

    };*/

});