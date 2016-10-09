package controller

import org.uqbar.commons.model.UserException
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.annotation.Put
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils
import repos.Repo
import xtrest.JSONPropertyUtils
import repos.RepoUsuario

@Controller
class PoiController {
	extension JSONUtils = new JSONUtils
	extension JSONPropertyUtils = new JSONPropertyUtils

	@Get("/pois")
	def Result tareas() {
		val pois = Repo.instance.allInstances 
		response.contentType = ContentType.APPLICATION_JSON
		ok(pois.toJson)
	}
	@Get("/usuarios")
	def Result usuarios() {
		val usuarios = RepoUsuario.instance.allInstances
		response.contentType = ContentType.APPLICATION_JSON
		ok(usuarios.toJson)
	}

	def static void main(String[] args) {
		XTRest.start(PoiController, 9000)
	}
	
}