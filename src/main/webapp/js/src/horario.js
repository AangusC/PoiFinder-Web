function Horario(abreHoraMañana, abreMinMañana,cierraHoraMañana,cierraMinMañana) {
	this.horaAperturaMañana = abreHoraMañana;
	this.minutoAperturaMañana =abreMinMañana;
	this.horaCierreMañana = cierraHoraMañana;
	this.minutoCierreMañana = cierraMinMañana;
	this.horaAperturaTarde = 0;
	this.minutoAperturaTarde = 0;
	this.horaCierreTarde = 0;
	this.minutoCierreTarde = 0;

	this.checkHora = function (hora, minuto) {
		return (this.entreHora(hora, minuto, this.horaAperturaMañana, this.minutoAperturaMañana, this.horaCierreMañana, this.minutoCierreMañana) ||
			this.entreHora(hora, minuto, this.horaAperturaTarde, this.minutoAperturaTarde, this.horaCierreTarde, this.minutoCierreTarde))
	};

	this.entreHora = function (horaUsuario, minutoUsuario, horaAperturaDato, minutoAperturaDato, horaCierreDato, minutoCierreDato) {
		if (horaUsuario > horaAperturaDato && horaUsuario < horaCierreDato) {
			return true
		} else {
			return ((horaUsuario == horaCierreDato && minutoUsuario <= minutoCierreDato) || (horaUsuario == horaAperturaDato && minutoUsuario >= minutoAperturaDato))
		}
	};


  }

