
var Colectivo = Poi.extend(function (op) {
	this.nombre= op.nombre  || "";
	var paradaJson=[]
	for(var i = 0, len = op.parada; i < len; i++){
		var temp =op.parada[i];
		var tempX = temp.x;
		var tempY = temp.y;
		this.paradaJson.push(new Point(tempX,tempY));
	}
	this.paradas= paradaJson;
	console.log(this.paradas)
	self=this
})
  .methods({
	estaCercaDe: function (point) {
		return _.some(self.paradas, function(parada){parada.distance(point) <= 0.1});
	},
	distancia: function(point){
		var tempa=this.paradas[0].distance(point);
		 for(var i=1;i<this.paradas.size;i++){
		 	if(this.paradas[i].distance(point)< tempa){
		 		tempa=this.paradas[i].distance(point);
		 	}
		 }
		return tempa;
	}
  });
