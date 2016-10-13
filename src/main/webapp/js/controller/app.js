
'use strict';
var poiApp = angular.module('poiApp', ['ui.router']);

poiApp.controller('loginCtrl', function($rootScope,$state,RepoUsuarios){
    var self=this;
    self.user="";
    self.pass="";
    
    self.validarUser= function(loginForm){
        self.loginForm = loginForm;
        RepoUsuarios.validarUsuario(self.user, self.pass, 
            function(response){
                if (response.data.message != undefined) {
                    self.loginForm.$invalid = true;
                    self.errorMessage = response.data.message;
                } else {
                    var usuario = new Usuario(response.data.nombre, response.data.password);
                    usuario.favoritos = response.data.favoritos;
                    $rootScope.usuarioLogueado = usuario;
                    $state.go("Busqueda");              
                }  
            });        
    };
});


    
poiApp.controller('busquedaCtrl', function ($state,RepoPois) {
   var self=this;
   self.textoBusqueda = '';  
   self.filtroActual = '';
   self.pois = [];

   this.getPois = function() {
       if (RepoPois.pois.length == 0) {
            RepoPois.findAll(function(response) {
                self.pois = [];
                self.pois = RepoPois.pois;
            });
        } else {
            self.pois = RepoPois.pois;
        }
    }   

    this.getPois();

    self.buscar = function() {
            self.filtroActual = self.textoBusqueda
    };
    
    self.verDetalle = function(poi) {
        $state.go("vistaPoi", {id: poi.id});  
    };
});

    
poiApp.controller('ColectivoController', function ($state,RepoPois) {
   var self=this;

});

poiApp.controller('PoiController', function ($rootScope, $state, poi, RepoUsuarios) {
   var self=this;
   self.poi = poi;
   self.miOpinion = poi.getOpinion($rootScope.usuarioLogueado.nombre);
   self.puntajeValoresValidos = [1,2,3,4,5];
   self.enviarOpinion = function() {
       self.poi.guardarOpinion(self.miOpinion.comentario, $rootScope.usuarioLogueado.nombre, self.miOpinion.score);
       self.miOpinion = poi.getOpinion($rootScope.usuarioLogueado.nombre);
   };
});