
'use strict';
var poiApp = angular.module('poiApp', []);

poiApp.controller('loginCtrl', function() {
    var self=this;
    self.user="";
    self.pass="";
    
    self.validarNombre= function(){
        console.log("test");
    };
    
   
});
