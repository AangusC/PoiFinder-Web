
var Poi = klass(function (myJson) {
		this.id = myJson.id || 0;
		this.nombre = myJson.nombre || "";
		this.coordenada = myJson.coordenada || "";
		this.horarios = myJson.horario || new Horario(0,0,0,0);
		this.distanciaMinCercania = myJson.distanciaMinCercania || 0.1;
		this.direccion = myJson.direccion || "";
		this.barrio = myJson.barrio ||"";				
		this.numero = myJson.numero || 0;
		this.diasAtencion = myJson.dias || ["lunes","martes","miercoles","jueves","viernes"];
		this.claves = myJson.claves ||"";
		this.tipo = myJson.tipo || "";
		this.opiniones = [];
		for(var i = 0, len = myJson.opiniones.length; i < len; i++) {
			var op = new Opinion(myJson.opiniones[i].coment, myJson.opiniones[i].user.nombre, myJson.opiniones[i].puntaje);
			this.opiniones.push(op);
		}
})
  .statics({
    head: ':)',
    feet: '_|_'
  })
  .methods({
 	guardarOpinion: function(texto, user, puntaje) {
		/*var idx=this.opiniones.indexOf(
			function (opinion) { 
    			return opinion.usuario == user;
			});
			
		var idx = this.opiniones.map(function(o) { return e.usuario; }).indexOf(user);
		*/
		var idx = -1;
		for(var i = 0, len = this.opiniones.length; i < len; i++) {
			if (this.opiniones[i].usuario === user) {
				idx = i;
				break;
			}
		}
		if (idx > -1) {
			this.opiniones.splice(idx, 1);
		}
		var op = new Opinion(texto, user, puntaje);
		this.opiniones.push(op);
	},
	getPoints: function() {
		var pun =0;
		var len = this.opiniones.length;
		if (len > 0 ) {
			for (i = 0; i < len ; i++) {
				pun = pun + this.opiniones[i].score;
			}
			pun = pun / len;
		}
        return pun;
	},
	getOpinion: function(user){
		var tmp=this.opiniones.find(
			function (opinion) { 
    			return opinion.usuario == user;
			});
		return tmp;
	},
	estaCercaDe: function (point) {
		return  this.coordenada.distance(point) <= this.distanciaMinCercania;
	},
	estaAbierto: function(dia,hora,min) {
		return (this.horarios.checkHora(hora, min) && this.diasAtencion.includes(dia))
	},
	distancia: function(point) {
		return coordenada.distancie(point);
	},
	matcherXNombre: function(_nombre){
		nombre.startsWith(_nombre)
	}

});



/*function checkHora(hora){
	var self = this;
	return if(hora>=self.horarioap&&hora<=self.horariocie);
}
new Poi({nombre: "blah", coordenada: 2})

function Poi(opts){
	this.nombre= opts.nombre || "";
	this.coordenada=opts.coordenada;
}*/
