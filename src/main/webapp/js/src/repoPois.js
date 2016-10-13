poiApp.service("RepoPois",function($http){
	var self = this;
	self.jsonPois = [];
    self.pois = [];

    self.findAll = function(callback){
        $http.get('/pois').then(
            function(response) {
                self.jsonPois= response.data;
                self.getPoisModelfromJson();
            }).then(callback);
    }   

   self.getPoisModelfromJson= function() {
        self.pois = [];
         _.each(self.jsonPois,function(jsonPoi){
         	self.pois.push(self.getPoiXTipo(jsonPoi))
         });
    };

    self.getPoiXTipo= function(jsonPoi){
    	var poi = undefined;
    	switch(jsonPoi.tipo){
    			case"banco":
    				poi= new Banco(jsonPoi);   				
    				break;
    			case"local":	
    				poi= new Local(jsonPoi);
    				break;
    			case"colectivo":	
    				poi= new Colectivo(jsonPoi);
    				break;
    			case"cgp":	
    				poi= new Cgp(jsonPoi);
    				break;
    	}
        return poi;
    }


});

