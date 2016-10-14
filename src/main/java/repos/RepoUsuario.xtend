package repos

import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.model.CollectionBasedRepo
import org.uqbar.commons.utils.Observable
import domain.Usuario

@Observable
@Accessors
class RepoUsuario extends CollectionBasedRepo<Usuario> {

static RepoUsuario repoUsuarios

	def static RepoUsuario getInstance() {
		if (repoUsuarios == null) {
			repoUsuarios = new RepoUsuario
		}
		repoUsuarios
	}

	new() {
		this.create(new Usuario("Malcom","pp","pp"))
		this.create(new Usuario("Angus","a","a"))
		this.create(new Usuario("Brian","qwe","qwe"))
		this.create(new Usuario("Bon","polo","nadie"))
	}

	override createExample() {
		new Usuario
	}

	override getEntityType() {
		typeof(Usuario)
	}
	
	override protected getCriterio(Usuario example) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}

}
