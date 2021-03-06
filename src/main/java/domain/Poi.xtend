package domain

import java.util.ArrayList
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.model.Entity
import org.uqbar.commons.utils.Dependencies
import org.uqbar.commons.utils.Observable
import org.uqbar.geodds.Point

@Accessors
@Observable
abstract class Poi extends Entity {
	String nombre
	String Barrio
	String direccion
	int numero
	Horario horarios
	String tipo
	Point coordenada
	double distanciaMinCercania
	List<String> diasAtencion = newArrayList
	List<String> palabrasClaves = new ArrayList
	List<Opinion> opiniones = newArrayList
	
	List<Integer> puntajeValoresValidos = #[1, 2, 3, 4, 5]

	boolean estaCerca = false

	def void estaCercaDe(Point point) {
		estaCerca = this.coordenada.distance(point) <= this.distanciaMinCercania
	}

	def estaAbierto(String nombre, String dia, int hora, int minuto) {
		(horarios.checkHora(hora, minuto) && diasAtencion.contains(dia))
	}

	def guardarOpinion(String texto, Usuario user, int puntaje) {
		opiniones.removeIf([o|o.user == user])
		var op = new Opinion(texto, user, puntaje)
		opiniones.add(op)
	}

	def getOpiniones() {
		opiniones
	}

	def double distancia(Point point) {
		coordenada.distance(point)
	}

	def Boolean matcherXNombre(String _nombre) {
		this.nombre.toLowerCase.contains(_nombre.toLowerCase)
	}

	@Dependencies("opiniones")
	def String getPoints() {
		var float pun = 0
		// opiniones.forEach[n|pun=pun+n.puntaje]
		if (opiniones.size != 0) {
			for (var int i = 0; i < opiniones.size; i++)
				pun += opiniones.get(i).puntaje

			pun = pun / (opiniones.size)
		}
		if (pun % 1 != 0)
			String.format("%.1f", pun)
		else
			String.format("%.0f", pun)
	}

	def getMiOpinion(Usuario usuario) {
		opiniones.findFirst[o|o.user == usuario]
	}
}
