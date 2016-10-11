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
	def Result pois() {
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
	
	@Get("/usuarios/:username")
	def Result usuarioByUsername() {
		response.contentType = "application/json"
		val usuarios = RepoUsuario.instance.allInstances
		try {
			val usuario = usuarios.findFirst[usr| usr.username == username ]
			if (usuario != null) {
				ok(usuario.toJson)
			}else {
				notFound("No existe el usuario " + username + "");
			}
		} catch (UserException e) {
			notFound("No existe el usuario " + username + "");
		}
	}
	
	@Get("/usuarios/:username&:password")
	def Result usuarioByUsernameAndPassword() {
		response.contentType = "application/json"
		val usuarios = RepoUsuario.instance.allInstances
		try {
			val usuario = usuarios.findFirst[usr| usr.username == username ]
			if (usuario != null) {
				if (usuario.password == password) {
					ok(usuario.toJson)
				}else {
					notFound("Password incorrecta");
				}
			}else {
				notFound("No existe el usuario " + username + "");
			}
		} catch (UserException e) {
			notFound("No existe el usuario " + username + "");
		}
	}
	
	

	def static void main(String[] args) {
		XTRest.start(PoiController, 9000)
	}
	
}
