poiApp.config(function ($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise("/login");

 $stateProvider

    .state('login', {

     url: "/login",
     templateUrl: "html/login.html",
     controller: "loginCtrl as login",
     data: {},
     resolve: {}
   })

    .state('Busqueda', {

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