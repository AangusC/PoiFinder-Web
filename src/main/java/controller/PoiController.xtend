package controller

import errors.BusinessException
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
import repos.RepoUsuario
import xtrest.JSONPropertyUtils
import domain.Opinion

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
	
	@Get('/pois/:id')
	def Result poiById() {
		response.contentType = "application/json"
		val iId = Integer.valueOf(id)
		try {
			ok(Repo.instance.searchById(iId).toJson)
		} catch (UserException e) {
			notFound("No existe la tarea con id " + id + "");
		}
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
				notFound((" No existe el usuario " + username + "").toJson);
			}
		} catch (UserException e) {
			notFound(("No existe el usuario " + username + "").toJson);
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
					ok((new BusinessException("Password incorrecta")).toJson);
				}
			}else {
				ok((new BusinessException("No existe el usuario " + username )).toJson);
			}
		} catch (UserException e) {
			notFound("No existe el usuario " + username + "");
		}
	}
	
	@Put("/usuarios/:nombre/AddFavorito")
	def Result usuarioAddFavorito(@Body String body) {
		try {
			val usuarios = RepoUsuario.instance.allInstances
			val usuario = usuarios.findFirst[usr| usr.nombre == nombre ]
			val idPoi = body.fromJson(Integer)
			usuario.agregarAFavoritos(Repo.instance.searchById(idPoi))
			//ok(usuario.toJson)
			ok('{ "status" : "OK" }')

		} catch (UserException e) {
			badRequest("No existe el poi");
		}
	}
	
	@Put("/pois/:id/AddOpinion")
	def Result poisAddOpinion(@Body String body) {
		try {
			val opinion = body.fromJson(Opinion)
			val poi = Repo.instance.searchById(Integer.valueOf(id))
			poi.guardarOpinion(opinion.coment, opinion.user, opinion.puntaje)
			ok('{ "status" : "OK" }')

		} catch (UserException e) {
			badRequest("No existe el poi");
		}
	}
	

	def static void main(String[] args) {
		XTRest.start(PoiController, 9000)
	}
	
}
