package repos

import domain.BuilderPoi
import domain.Comuna
import domain.Horario
import domain.Poi
import domain.Servicio
import domain.Usuario
import java.util.Arrays
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.model.CollectionBasedRepo
import org.uqbar.commons.utils.Observable
import org.uqbar.geodds.Point

@Observable
@Accessors
class Repo extends CollectionBasedRepo<Poi> {
	static Repo repo

	def static Repo getInstance() {
		if (Repo.repo == null) {
			Repo.repo = new Repo
		}
		Repo.repo
	}

	private new() {
		val point1 = Point.and(18.787878, 34.567834)
		val point2 = Point.and(18.64558, 34.5667099)
		val point3 = Point.and(20.548967, 15.9898980)
		val point4 = Point.and(-34.546782, -58.552163)
	
		var comuna1 = new Comuna(1)
		var comuna2 = new Comuna(2)
		
		var Point vertice1comuna1 = Point.and(-34.508278, -58.479405)
		var Point vertice2comuna1 = Point.and(-34.516642, -58.475876)
		var Point vertice3comuna1 = Point.and(-34.517631, -58.488267)
		
		var Point vertice1comuna2 = Point.and(-34.565776, -58.538127)
		var Point vertice2comuna2 = Point.and(-34.554939, -58.521443)
		var Point vertice3comuna2 = Point.and(-34.589001, -58.519291)
		var Point vertice4comuna2 = Point.and(-34.569315, -58.509994)
		var Point vertice5comuna2 = Point.and(-34.579960, -58.541980)
		
		var List<Point> paradaA = Arrays.asList(point1,point2,point3,point4)
		var List<Point> paradaB = Arrays.asList(vertice1comuna1,vertice2comuna1,vertice3comuna1 )
		var List<Point> paradaC = Arrays.asList(vertice1comuna1,vertice2comuna1,vertice3comuna2,vertice5comuna2,vertice1comuna2)
		
		comuna1.addCoordenadadPoligono(vertice1comuna1)
		comuna1.addCoordenadadPoligono(vertice2comuna1)
		comuna1.addCoordenadadPoligono(vertice3comuna1)

		comuna2.addCoordenadadPoligono(vertice1comuna2)
		comuna2.addCoordenadadPoligono(vertice2comuna2)
		comuna2.addCoordenadadPoligono(vertice3comuna2)
		comuna2.addCoordenadadPoligono(vertice4comuna2)
		comuna2.addCoordenadadPoligono(vertice5comuna2)
		
		val List<Servicio> servicioA = Arrays.asList(new Servicio("Rentas",new Horario(14,00,20,00),Arrays.asList("Lunes","Martes","Miercoles"))
			,	new Servicio("Plan de Prevención del Delito",new Horario(9,00,18,00),Arrays.asList("Lunes"))
			,	new Servicio("Defensoría del Niño, Niña y Adolescente",new Horario(10,30,21,00),Arrays.asList("Lunes","Martes","Miercoles","Jueves","Viernes"))
		)
		val List<Servicio> servicioB = Arrays.asList(new Servicio("Registro Civil",new Horario(14,00,20,00),Arrays.asList("Lunes","Martes","Miercoles","Jueves","Viernes"))
			,	new Servicio("Defensa del Consumidor",new Horario(9,30,12,00),Arrays.asList("Miercoles","Jueves","Viernes"))
			,	new Servicio("Casamientos",new Horario(9,30,15,00),Arrays.asList("Martes","Miercoles","Jueves","Viernes","Sabados"))
		)
		
		
		var listaPois = new BuilderPoi()
			.crearBanco("Galicia", point1, "Belgrano", "Maximiliano", Arrays.asList("cobro cheques", "depósitos"), "Rivadavia 372")
			.crearBanco("Santander", point2, "Colegiales", "Roberto", Arrays.asList("cajero automatico"),"Lavalleja 581")
			.crearBanco("Banco Hipotecario", point1, "San Martin", "Mendez", Arrays.asList("cobro cheques", "depósitos", "cajero automatico"),"Cochabamba 2219")
			.crearColectivo(78,paradaA)
			.crearColectivo(11,paradaB)
			.crearColectivo(21,paradaC)
			.crearLocal("Lo de Rosa", Arrays.asList("Rabano", "Lechuga"), "Verduleria", point3,"Mitre 3271")
			.crearLocal("Lo de Carlos", Arrays.asList("Vacio", "Chinchulin", "Chorrizo", "Nalga"), "Carniceria", point4,"Matheu 3289")
			.crearLocal("Lo de Pepers", Arrays.asList("Chupetin", "Chicle", "Turron"), "Kiosco", point4,"Pueyrredon 3332")
			.crearCgp(comuna1,vertice1comuna1,"Recoleta", "Gutierrez, Marcos", "Pres. José E. Uriburu 1022", " 4958-6504 / 7660-7047",servicioA)
			.crearCgp(comuna2,vertice3comuna2, "Flores", "Perez, Ramiro", "Esmeralda 4459", " 4235-8954 / 7658-7147", servicioB)
			.build
		this.create(listaPois)
		
		var pp =listaPois.get(0).guardarOpinion("Ta joya", new Usuario("Malcom","pp","pp"), 3);
		listaPois.get(0).guardarOpinion("Masomeno", new Usuario("Angus","a","a"), 2);
		listaPois.get(0).guardarOpinion("Ta bom", new Usuario("Bon","qwe","qwe"), 4);
		
	}
	def create(List<Poi> iop) {
		iop.forEach[n|this.create(n)]
	}
	override protected getCriterio(Poi example) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}
	
	override createExample() {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}
	
	override getEntityType() {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}

	
	
	}

