poiApp.config(function ($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise("/");

 $stateProvider

    .state('vistaLogin', {

     url: "/",
     templateUrl: "html/login.html",
     controller: "loginCtrl as login"
   })

    .state('vistaBusqueda', {

     url: "/busqueda",
     templateUrl: "html/busquedaWindows.html",
     controller: "busquedaCtrl as busquedaPoi"
   })

    .state('vistaBanco', {

     url: "/banco",

     // templateUrl: "partials/banco.html",
     templateUrl: "html/banco.html",
     controller: "BancoController as bancoCtrl"
   })


    .state('vistaCgp', {

     url: "/cgp",
     // templateUrl: "partials/banco.html",
     templateUrl: "cgp.html",
     controller: "CgpController as cgpCtrl"
   })



  .state('vistaColectivo', {

     url: "/colectivo",
     // templateUrl: "partials/banco.html",
     templateUrl: "colectivo.html",
     controller: "ColectivoController as `colectivoCtrl"
   })



  .state('vistaLocal', {

     url: "/local",
     // templateUrl: "partials/banco.html",
     templateUrl: "local.html",
     controller: "LocalController as localCtrl"
   })


});