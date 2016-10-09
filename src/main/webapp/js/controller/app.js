
'use strict';
var poiApp = angular.module('poiApp', ['ui.router']);

poiApp.controller('loginCtrl', function($state,RepoUsuarios){
    var self=this;
    self.user="";
    self.pass="";
    
    this.getUsuarios = function() {
        tareasService.findAll(function(response) {
            self.poi = response.data;
        });
    }   
    self.validarUser= function(loginForm){
        
         try {
            self.usuario = RepoUsuarios.getUsuario(self.user);
            
            if (self.usuario.esPasswordValida(self.pass)) {
               $state.go("Busqueda");                
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
   this.getPois = function() {
        tareasService.findAll(function(response) {
            self.poi = response.data;
        });
    }   

    this.getPois();

    }

);