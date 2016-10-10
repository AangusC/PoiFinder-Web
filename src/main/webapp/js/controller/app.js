
'use strict';
var poiApp = angular.module('poiApp', ['ui.router']);

poiApp.controller('loginCtrl', function($state,RepoUsuarios){
    var self=this;
    self.user="";
    self.pass="";
    

    self.validarUser= function(loginForm){
        self.loginForm = loginForm;
        RepoUsuarios.findAll(self.validarUserCallback);
    };     
    self.validarUserCallback= function(){
        try {
            self.usuario = RepoUsuarios.getUsuario(self.user);
            
            if (self.usuario.esPasswordValida(self.pass)) {
               $state.go("Busqueda");                
            }else{
                throw "Password Incorrecto.";
            }    
         }catch (exception) {
            self.loginForm.$invalid = true;
            self.errorMessage = exception;
        }            
    };       

});


    
poiApp.controller('busquedaCtrl', function (RepoPois) {
   var self=this;
   self.textoBusqueda = '';  
    self.filtroActual = '';

   this.getPois = function() {
        RepoPois.findAll(function(response) {
            self.pois = response.data;
        });
    }   

    this.getPois();

    self.buscar = function() {
            self.filtroActual = self.textoBusqueda
    };
    }

);