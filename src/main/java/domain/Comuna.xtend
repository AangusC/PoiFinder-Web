package domain

import org.uqbar.geodds.Point
import org.uqbar.geodds.Polygon

import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class Comuna {
	int nombre
	Polygon area

	new(int numero) {
		nombre = numero
		area = new Polygon()
	}

	def addCoordenadadPoligono(Point point) {
		area.add(point)
	}

	def validarPosicion(Point point) {
		area.isInside(point)
	}
//--------------------------------------------------------------	
}
