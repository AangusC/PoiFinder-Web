poiApp.directive('listaOpiniones', listadoDeOpiniones);

function listadoDeOpiniones() {
   var lista = {
       restrict: 'EA',
       templateUrl: 'html/listaOpiniones.html'
   };
   return lista;
}
