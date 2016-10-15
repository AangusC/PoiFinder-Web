package domain


import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.utils.TransactionalAndObservable
import org.uqbar.geodds.Point

@Accessors
@TransactionalAndObservable
class Colectivo extends Poi
{
	String linea
	List<Point> paradas
	List<String> dias
	

	new(int nombre , List<Point>paradass)
	{
		this.nombre = "Linea "+ nombre
		linea = nombre.toString
		paradas = paradass
	}

	def addParada(double x, double y)
	{
		paradas.add(Point.and(x, y))
	}

	override void estaCercaDe(Point point)
	{
		estaCerca=(paradas.exists[paradas|paradas.distance(point) <= 0.1])	
	}

	override estaAbierto(String nombre, String dia, int hora, int minuto)
	{
		true
	}
	
	override Boolean matcherXNombre(String _nombre)
	{
		linea.contains(_nombre)
	}
	
	//-----------------
	// Lo hice asi porque no me funciona el min
	//-----------------
	override double distancia(Point point)
	{
	
		
		 var double tempa=paradas.get(0).distance(point)
		 for(var int i=1;i<paradas.size;i++){
		 	if(paradas.get(i).distance(point)< tempa){
		 		tempa=paradas.get(i).distance(point)
		 	}
		 }
		tempa
	}
	
}
