function Horario() {

	this.checkHora = fuction (hora, minuto) {
		entreHora(hora, minuto, horaAperturaMañana, minutoAperturaMañana, horaCierreMañana, minutoCierreMañana) ||
			entreHora(hora, minuto, horaAperturaTarde, minutoAperturaTarde, horaCierreTarde, minutoCierreTarde)
	}

	this.entreHora = fuction (horaUsuario, minutoUsuario, horaAperturaDato, minutoAperturaDato, horaCierreDato, minutoCierreDato) {
		if (horaUsuario > horaAperturaDato && horaUsuario < horaCierreDato) {
			return true
		} else {
			(horaUsuario == horaCierreDato && minutoUsuario <= minutoCierreDato) || (horaUsuario == horaAperturaDato && minutoUsuario >= minutoAperturaDato)
		}
	}


  };

