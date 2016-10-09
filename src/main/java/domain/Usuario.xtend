package domain

import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.model.Entity
import org.uqbar.commons.utils.Observable
import java.util.List
import java.util.ArrayList
import org.uqbar.geodds.Point

@Accessors
@Observable
class Usuario extends Entity{
	
	String nombre
	String username
	String password
	List<Integer> busquedasRealizadas =new ArrayList
	List<Poi> favoritos =new ArrayList
	
	
	
	new (String name, String user, String pass){
		nombre= name
		username= user
		password= pass
	}
	
	new() {
		
	}
	
	def agregarAFavoritos(Poi punto){
		favoritos.add(punto)
	}
	
	def esFavorito(Poi punto){
		favoritos.contains(punto)
	}
	
	def sacarDeFavoritos(Poi punto){
		favoritos.remove(punto)
	}
	
	
	
	def String showNombre(){
		nombre
	}
	
	
	
}
