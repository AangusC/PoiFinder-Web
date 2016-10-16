
var Colectivo = Poi.extend(function (op) {
	this.nombre= op.nombre  || "";
	var paradaJson=[]
	for(var i = 0; i < op.paradas.length; i++){
		var temp =op.paradas[i];
		var tempX = temp.x;
		var tempY = temp.y;
		paradaJson.push(new Point(tempX,tempY));
	}
	this.paradas= paradaJson;
	self=this
})
  .methods({
	estaCercaDe: function (point) {
		return _.some(self.paradas, function(parada){parada.distance(point) <= 0.1});
	},
	distancia: function(point){
		var temp= []
		_.each(this.paradas,function(parada){temp.push(parada.distance(point))})
		return parseFloat(Math.round(_.min(temp) * 100) / 100).toFixed(2)
	},
	cantParadas : function(){
		return this.paradas.length
	}
  });
