poiApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider

    .state('login', {
      url: "/login",
      templateUrl: "html/login.html",
      controller: "loginCtrl as login"
    })

    .state('Busqueda', {

      url: "/busqueda",
      templateUrl: "html/busquedaWindows.html",
      controller: "busquedaCtrl as busquedaPoi"
    })

    .state('vistaPoi', {
      url: "/poi/:id",
      templateUrl: "html/colectivo.html",
      controller: "PoiController",
      controllerAs: "poiCtrl",
      resolve: {
        poi: function (RepoPois, $stateParams) {
          var poi = RepoPois.pois.find(function (poi) {
            return poi.id == $stateParams.id;
          });

          return poi;
        }
      }
    })
});