
'use strict';
var poiApp = angular.module('poiApp', ['ui.router']);

poiApp.controller('loginCtrl', function($state,RepoUsuarios){
    var self=this;
    self.user="";
    self.pass="";
   
    self.validarUser= function(loginForm){
        
         try {
            self.usuario = RepoUsuarios.getUsuario(self.user);
            
            if (self.usuario.esPasswordValida(self.pass)) {
               $state.go("vistaBusqueda");                
            }else{
                throw "Password Incorrecto.";
            }    
         }catch (exception) {
            loginForm.$invalid = true;
            this.errorMessage = exception;
        }             
    };       
});


    
poiApp.controller('busquedaCtrl', function (RepoPois) {
    var self=this;
    self.textoBusqueda = '';  
    self.filtroActual = '';

    self.listaPios = RepoPois.pois;

    

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