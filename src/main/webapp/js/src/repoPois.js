poiApp.service("RepoPois",function($http){
    this.findAll = function(callback){
        $http.get("/pois").then(callback);
    }   
    
});

