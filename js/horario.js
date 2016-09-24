function Horario(horaA,minA,horaC,minC) {
	this.horaAperturaMañana=horaA;
	this.minutoAperturaMañana=minA;
	this.horaAperturaMañana=horaC;
	this.minutoCierreMañana=minC;

	this.checkHora = function (hora, minuto) {
		entreHora(hora, minuto, horaAperturaMañana, minutoAperturaMañana, horaCierreMañana, minutoCierreMañana) ||
			entreHora(hora, minuto, horaAperturaTarde, minutoAperturaTarde, horaCierreTarde, minutoCierreTarde)
	};

	this.entreHora = function (horaUsuario, minutoUsuario, horaAperturaDato, minutoAperturaDato, horaCierreDato, minutoCierreDato) {
		if (horaUsuario > horaAperturaDato && horaUsuario < horaCierreDato) {
			return true
		} else {
			(horaUsuario == horaCierreDato && minutoUsuario <= minutoCierreDato) || (horaUsuario == horaAperturaDato && minutoUsuario >= minutoAperturaDato)
		}
	};


  }

