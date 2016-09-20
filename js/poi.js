
var Poi = klass(function (myJson) {
		this.nombre = myJson.nombre || "";
		this.coordenada = myJson.coordenada || "";
		this.horarioap = myJson.horario || "";
		this.horariocie = myJson.horario2 || "";
		this.distanciaMinCercania = myJson.distanciaMinCercania || 0.1;
		this.direccion = myJson.direccion || "";
		this.barrio = myJson.barrio ||"";				
		this.numero = myJson.numero || 0;
		this.diasAtencion = myJson.dias || ["lunes","martes","miercoles","jueves","viernes"];
		this.palabrasClaves = myJson.Claves ||"";
		this.opiniones = [];
})
  .statics({
    head: ':)',
    feet: '_|_'
  })
  .methods({
 	guardarOpinion: function(texto, user, puntaje) {
		//opiniones.removeIf([o|o.user == user])
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
		var tmp=this.opiniones.filter(op=> op.usuario.nombre == user.nombre);
		return tmp[0];
	},
	estaCercaDe: function (point) {
		return  this.coordenada.distance(point) <= this.distanciaMinCercania;
	},
	estaAbierto: function(hora) {
		return (hora >= this.horarioap)&&(hora<=this.horariocie);
		//return	(self.checkHora(hora));
	},
	distancia: function(point) {
		return coordenada.distancie(point);
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
