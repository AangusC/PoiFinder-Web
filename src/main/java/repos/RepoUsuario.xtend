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
		this.create(new Usuario("Miguel","pp","pp"))
		this.create(new Usuario("Ruben","a","a"))
		this.create(new Usuario("Aangus","qwe","qwe"))
		this.create(new Usuario("Marco","polo","nadie"))
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
