function DispositivoGps() {
	var coord=[	
		new Point(18.787878, 34.567834),
		new Point(18.64558, 34.5667099),
		new Point(20.548967, 15.9898980),
		new Point(-34.546782, -58.552163),
	
		new Point(-34.508278, -58.479405),
		new Point(-34.516642, -58.475876),
		new Point(-34.517631, -58.488267),
		
		new Point(-34.565776, -58.538127),
	 	new Point(-34.554939, -58.521443),
		new Point(-34.589001, -58.519291),
		new Point(-34.569315, -58.509994),
		new Point(-34.579960, -58.541980)
		]
	//this.coordenadaGps=coord[Math.floor(Math.random() * coord.length)]
	this.coordenadaGps = new Point(20.548967, 15.9898980);
}

var dispositivoGps = new DispositivoGps();