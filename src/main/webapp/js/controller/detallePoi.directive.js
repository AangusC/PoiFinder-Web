poiApp.directive('detallePoi', detallePoi);

function detallePoi() {
   var params = {
       restrict: 'EA',
       //template: '<div ng-include="getContentUrl"></div>',
       templateUrl: 'html/detallePoi.Main.html',
       controller:'DetallePoiController as poiCtrl',
       scope: {
            poi: '=' 
        },
        link: function($scope, element, attrs) {
            $scope.$watch("poi",function(newValue,oldValue) {
                if(newValue) {
                    $scope.loadDetalle(newValue);
                    $scope.getContentUrl = 'html/detallePoi.'+newValue.tipo+'.html';
                }
            });
            $scope.getContentUrl = 'html/detallePoi.vacio.html';
        }
   };
   return params;
}

poiApp.controller('DetallePoiController', function ($rootScope, $scope, $state, RepoUsuarios, RepoPois) {
   var self=this;

   $scope.loadDetalle = function (poi) {
       if(poi) {
            self.poi = $scope.poi;
            self.miOpinion = self.poi.getOpinion($rootScope.usuarioLogueado.nombre);
            self.puntajeValoresValidos = [1,2,3,4,5];
            self.enviarOpinion = function() {
                self.poi.guardarOpinion(self.miOpinion.comentario, $rootScope.usuarioLogueado.nombre, self.miOpinion.score);
                self.miOpinion = poi.getOpinion($rootScope.usuarioLogueado.nombre);
                //var opinionDto = new OpinionDto(self.miOpinion.comentario, $rootScope.usuarioLogueado, self.miOpinion.score);
                //RepoPois.agregarOpinion(self.poi, opinionDto, null);
            };
            self.cambiarFavorito = function(valor) {
                if (valor) {
                    $rootScope.usuarioLogueado.agregarFavoritos(self.poi);
                    RepoUsuarios.agregarFavorito($rootScope.usuarioLogueado.nombre, poi, null);
                } else {
                    $rootScope.usuarioLogueado.eliminarFavoritos(self.poi);
                }
                self.poi.favorito = valor;
            };
            self.getParadas = function (){
                  
                      return poi.cantParadas && poi.cantParadas()                  
                  
            }
            self.getDistancia = function(){
                return poi.distancia(dispositivoGps.coordenadaGps);
            }
            self.getServicios = function(){
                          
                  return   poi.getServicios && poi.getServicios()
                  
              }
            self.getDireccion = function(){
                return poi.direccion
              }
            self.getPoint = function(){
                return poi.getPoints()
              }
       }
     
   }
    
});
